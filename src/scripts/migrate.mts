import { slugify } from "../lib/utils";

const datafile = Bun.file(`${import.meta.dir}/../scripts/Data.json`);

const data = await datafile.json();
const projects = data.projects;

console.log(`Projects length: ${projects.length}`);
let iterated: number = 0;

for (const project of projects) {
  iterated++;

  console.log(`\nProject: ${project.heading}`);
  console.log("Fetching Repo created date");

  const githubUrl = project.url?.github?.link;
  if (!githubUrl) {
    console.log("No GitHub link, skipping repo date fetch");
    continue;
  }

  const match = githubUrl.match(/github\.com\/([^/]+\/[^/]+?)(\.git)?\/?$/);
  const repoPath = match?.[1];

  let createdAt = "2026-07-03";
  if (repoPath) {
    const res = await fetch(`https://api.github.com/repos/${repoPath}`);
    const repoData = await res.json();
    createdAt = repoData?.created_at?.split("T")[0] ?? createdAt;
  }

  console.log("Frontmatter creating ");

  const frontmatter = `---
title: "${project.heading}"
description: "${project.desc}"
technologies: [${(project.technologies ?? []).map((tech: string) => `"${tech}"`).join(", ")}]
hosted: ${(project.hosted ?? "").trim().split(" ").pop() ?? ""}
tags: [${(project.tags ?? []).map((tag: string) => `"${tag}"`).join(", ")}]
date: ${createdAt}
github: "${project.url?.github?.link ?? ""}"
live: "${project.url?.live?.link ?? ""}"
draft: false
featureOrder: 0
---
`;
  console.log(`Frontmatter created`);

  console.log(`Get Markup`);
  const body = project.brief;

  console.log(`Filename created`);
  const filename = slugify(project.heading ?? "");

  const file = frontmatter + "\n\n" + body + "\n";

  if (
    await Bun.write(
      `${import.meta.dir}/../contents/projects/${filename}.md`,
      file,
    )
  ) {
    console.log(iterated + "Passed");
  } else {
    console.log(iterated + "Failed");
  }
}

console.log("\nFinished");
