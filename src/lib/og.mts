import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import path from "node:path";
import fs from "node:fs/promises";
import crypto from "node:crypto";

const CACHE_DIR = path.resolve(".og-cache");

let fontCormorantData: ArrayBuffer;
let fontInterRegularData: ArrayBuffer;
let fontInterBoldData: ArrayBuffer;

async function loadFonts() {
  if (fontCormorantData && fontInterRegularData && fontInterBoldData) return;

  const cormorantURL =
    "https://cdn.jsdelivr.net/fontsource/fonts/cormorant-garamond@latest/latin-600-normal.woff";
  const interRegularURL =
    "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff";
  const interBoldURL =
    "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.woff";

  [fontCormorantData, fontInterRegularData, fontInterBoldData] =
    await Promise.all([
      fetch(cormorantURL).then((r) => r.arrayBuffer()),
      fetch(interRegularURL).then((r) => r.arrayBuffer()),
      fetch(interBoldURL).then((r) => r.arrayBuffer()),
    ]);
}

export interface OgOptions {
  title: string;
  description?: string;
}

function hashInputs(opts: OgOptions): string {
  const hash = crypto.createHash("sha256");
  hash.update(JSON.stringify({ ...opts, _version: "v1.0.0" }));
  return hash.digest("hex").slice(0, 16);
}

export async function generateOgImage(
  opts: OgOptions,
  requestURL: URL,
): Promise<Buffer> {
  await fs.mkdir(CACHE_DIR, { recursive: true });

  const hash = hashInputs(opts);
  const cachePath = path.join(CACHE_DIR, `${hash}.png`);

  try {
    const cachedFile = await fs.readFile(cachePath);
    return cachedFile;
  } catch (error) {
    // Cache miss
  }

  await loadFonts();
  const { title, description } = opts;

  const host = requestURL.host;
  const domainName =
    host.includes("localhost") || host.includes("127.0.0.1")
      ? "shahabas.vercel.app"
      : host;

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: "#030303",
          backgroundImage:
            "radial-gradient(circle at 50% -20%, #202024 0%, #030303 70%)",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                height: "100%",
                width: "100%",
                padding: "80px 100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              },
              children: [
                // Header
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "12px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "8px",
                            height: "2px",
                            background: "rgba(255, 255, 255, 0.5)",
                          },
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "rgba(255, 255, 255, 0.6)",
                            letterSpacing: "4px",
                          },
                          children: "SHAHABAS ABDUL HAMEED",
                        },
                      },
                    ],
                  },
                },
                // Body
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      marginTop: "20px",
                      marginBottom: "auto",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            fontSize: "64px",
                            fontWeight: 600,
                            color: "#ffffff",
                            fontFamily: "Cormorant Garamond",
                            lineHeight: "1.15",
                            letterSpacing: "-0.01em",
                          },
                          children: title,
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            fontSize: "26px",
                            color: "#8a8a8a",
                            fontFamily: "Inter",
                            lineHeight: "1.5",
                            fontWeight: 400,
                            maxWidth: "900px",
                          },
                          children: description || "",
                        },
                      },
                    ],
                  },
                },
                // Footer
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderWidth: "1px 0 0 0",
                      borderStyle: "solid",
                      borderColor: "rgba(255, 255, 255, 0.05)",
                      paddingTop: "24px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            fontSize: "20px",
                            color: "rgba(255, 255, 255, 0.5)",
                            fontFamily: "Inter",
                          },
                          children: "Portfolio, built using Astro!",
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "rgba(255, 255, 255, 0.7)",
                            letterSpacing: "1px",
                          },
                          children: domainName,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Cormorant Garamond",
          data: fontCormorantData,
          weight: 600,
          style: "normal",
        },
        {
          name: "Inter",
          data: fontInterRegularData,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: fontInterBoldData,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );

  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
    .render()
    .asPng();

  await fs.writeFile(cachePath, png);
  return Buffer.from(png);
}
