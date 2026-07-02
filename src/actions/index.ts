import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";
import { emailTemplate } from "../lib/emailTemplate";

const requiredText = <T extends z.ZodType<any, string, any>>(schema: T) =>
  z
    .string()
    .nullish()
    .transform((val) => val ?? "")
    .pipe(schema);

export const server = {
  sendMail: defineAction({
    accept: "form",
    input: z.object({
      name: requiredText(
        z
          .string()
          .min(3, { error: "Name is too short" })
          .max(30, { error: "Name is too long" }),
      ),
      email: requiredText(z.email({ error: "Invalid email address" })),
      message: requiredText(
        z.string().min(2, { error: "Message is too short" }),
      ),
      subject: z.string().nullish(),
    }),
    handler: async (input, context) => {
      const { name, email, message, subject } = input;

      const ipAddr = (
        context.request.headers.get("cf-connecting-ip") ||
        context.request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
        context.request.headers.get("x-real-ip") ||
        context.clientAddress ||
        "Unknown"
      ).replace(/^::ffff:/, "");

      if (subject) {
        console.log(`${ipAddr}: Spam Detected`);
        return {
          success: true,
        };
      }

      const resendApiKey = import.meta.env.RESEND_API_KEY;
      // const resendApiKey = import.meta.env.NULL;

      if (!resendApiKey) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong, please try again.",
        });
      }

      const resend = new Resend(resendApiKey);

      const payload = {
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: import.meta.env.TO_EMAIL,
        subject: `New Message from ${name}`,
        html: emailTemplate({ name, email, message, ipAddr }),
      };

      const { data, error } = await resend.emails.send(payload);

      if (error) {
        console.error(error);
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Failed to send message, please try again.",
        });
      }

      return { success: true, data };
    },
  }),
};
