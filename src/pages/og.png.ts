import type { APIRoute } from "astro";
import { generateOgImage } from "../lib/og.mts";

export const GET: APIRoute = async (context) => {
  const png = await generateOgImage(
    {
      title: "Shahabas Abdul Hameed | Portfolio",
      description: "Personal Portfolio of Shahabas Abdul Hameed",
    },
    context.url
  );

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};