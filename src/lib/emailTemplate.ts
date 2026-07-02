interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  ipAddr: string;
}

export function emailTemplate({
  name,
  email,
  message,
  ipAddr,
}: EmailTemplateProps): string {
  const year = new Date().getFullYear();

  return `
  <div style="margin: 0; padding: 0; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

            <!-- Header -->
            <tr>
              <td style="padding: 32px 40px 24px; text-align: center;">
                <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #f5f5f7; letter-spacing: 0.5px;">Portfolio</h1>
                <div style="margin-top: 8px; width: 40px; height: 2px; background-color: #8a8a8a; display: inline-block;"></div>
              </td>
            </tr>

            <!-- Main Card -->
            <tr>
              <td style="padding: 0 20px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f0f0f; border: 1px solid #1f1f1f; border-radius: 12px; overflow: hidden;">

                  <!-- Title Bar -->
                  <tr>
                    <td style="padding: 24px 32px 16px;">
                      <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #8a8a8a;">New Contact Message</p>
                      <h2 style="margin: 0; font-size: 22px; font-weight: 600; color: #f5f5f7;">From ${name}</h2>
                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding: 0 32px;">
                      <div style="height: 1px; background-color: #1f1f1f;"></div>
                    </td>
                  </tr>

                  <!-- Sender Details -->
                  <tr>
                    <td style="padding: 20px 32px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom: 12px;">
                            <p style="margin: 0 0 2px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8a8a8a;">Name</p>
                            <p style="margin: 0; font-size: 15px; color: #f5f5f7;">${name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom: 12px;">
                            <p style="margin: 0 0 2px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8a8a8a;">Email</p>
                            <a href="mailto:${email}" style="font-size: 15px; color: #f5f5f7; text-decoration: underline; text-decoration-color: #8a8a8a; text-underline-offset: 3px;">${email}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding: 0 32px;">
                      <div style="height: 1px; background-color: #1f1f1f;"></div>
                    </td>
                  </tr>

                  <!-- Message Body -->
                  <tr>
                    <td style="padding: 20px 32px 28px;">
                      <p style="margin: 0 0 8px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8a8a8a;">Message</p>
                      <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #f5f5f7; white-space: pre-wrap;">${message}</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 24px 40px 16px; text-align: center;">
                <p style="margin: 0 0 4px; font-size: 11px; color: #8a8a8a;">Sent from your portfolio contact form</p>
                <p style="margin: 0; font-size: 11px; color: #8a8a8a;">IP: ${ipAddr}</p>
              </td>
            </tr>

            <!-- Copyright -->
            <tr>
              <td style="padding: 8px 40px 32px; text-align: center;">
                <p style="margin: 0; font-size: 11px; color: #8a8a8a;">© ${new Date().getFullYear()} Shahabas Abdul Hameed. All rights reserved.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
}
