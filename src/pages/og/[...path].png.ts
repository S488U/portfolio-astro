import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { slugify } from "../../lib/utils";
import { generateOgImage } from "../../lib/og.mts";

export async function getStaticPaths() {
  const projects = await getCollection("projects");

  const paths = [
    {
      params: { path: "projects" },
      props: {
        title: "Projects - Shahabas Abdul Hameed",
        description:
          "Showcasing projects I've built while learning and working with modern web technologies.",
      },
    },
    {
      params: { path: "contact" },
      props: {
        title: "Connect Me | Shahabas Abdul Hameed",
        description:
          "Feel free to reach out through the contact form or connect with me on my social platforms.",
      },
    },
    {
      params: { path: "404" },
      props: {
        title: "Page Not Found",
        description: "The page you are looking for does not exist.",
      },
    },
  ];

  for (const project of projects) {
    paths.push({
      params: { path: `project/${slugify(project.data.title)}` },
      props: {
        title: project.data.title,
        description: project.data.description,
      },
    });
  }

  return paths;
}

export const GET: APIRoute = async (context) => {
  const { title, description } = context.props as {
    title: string;
    description: string;
  };

  const png = await generateOgImage({ title, description }, context.url);

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
