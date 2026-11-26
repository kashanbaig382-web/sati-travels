
export default function sitemap() {
  const baseUrl = "https://YOUR-DOMAIN.com";

  const pages = [
    "",
    "/flights",
    "/destinations",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.7,
  }));
}
