export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow:    "/",
        disallow: ["/dashboard/", "/api/", "/_next/"],
      },
    ],
    sitemap: "https://quranacademy.online/sitemap.xml",
    host:    "https://quranacademy.online",
  };
}
