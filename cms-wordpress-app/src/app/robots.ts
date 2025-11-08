import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://wa-ve.jp/sitemap.xml',
  };
}

// WordPress robots.txt - commented out for simple landing page
// This will be re-enabled when WordPress integration is needed

// import { MetadataRoute } from "next";

// export const revalidate = 0;

// export default async function robots(): Promise<MetadataRoute.Robots> {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/robots.txt`,
//     { cache: "no-store" },
//   );

//   const text = await res.text();

//   const lines = text.split("\n");

//   const userAgent = lines
//     .find((line) => line.startsWith("User-agent: "))
//     ?.replace("User-agent: ", "");
//   const allow = lines
//     .find((line) => line.startsWith("Allow: "))
//     ?.replace("Allow: ", "");
//   const disallow = lines
//     .find((line) => line.startsWith("Disallow: "))
//     ?.replace("Disallow: ", "");
//   const sitemap = lines
//     .find((line) => line.startsWith("Sitemap: "))
//     ?.replace("Sitemap: ", "");

//   const robots: MetadataRoute.Robots = {
//     rules: {
//       userAgent,
//       allow,
//       disallow,
//     },
//     sitemap,
//   };

//   return robots;
// }
