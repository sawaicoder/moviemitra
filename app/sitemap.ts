import type { MetadataRoute } from "next";
import { movies } from "@/lib/movies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com").replace(/\/$/, "");
  const staticPaths = [
    "", "/about", "/contact", "/privacy", "/cookies", "/terms",
    "/disclaimer", "/copyright", "/editorial-policy",
  ];
  return [
    ...staticPaths.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...movies.map((movie) => ({ url: `${base}/movies/${movie.slug}`, lastModified: new Date() })),
  ];
}
