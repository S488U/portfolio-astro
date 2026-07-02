export const slugify = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // strip special chars first (keep spaces for now)
    .replace(/\s+/g, "-") // then convert spaces to hyphens
    .replace(/-+/g, "-") // collapse multiple hyphens into one
    .replace(/^-|-$/g, ""); // trim leading/trailing hyphens
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
