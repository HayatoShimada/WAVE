import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "404 - Page Not Found | WAVE",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Page Not Found</p>
        <a href="/" style={{ color: '#beff3c', textDecoration: 'underline' }}>
          Return to Home
        </a>
      </div>
    </div>
  );
}

// WordPress 404 page - commented out for simple landing page
// This will be re-enabled when WordPress integration is needed

// import type { Metadata } from "next";
// import { print } from "graphql/language/printer";

// import { setSeoData } from "@/utils/seoData";

// import { fetchGraphQL } from "@/utils/fetchGraphQL";
// import { ContentNode, Page } from "@/gql/graphql";
// import { PageQuery } from "@/components/Templates/Page/PageQuery";
// import { SeoQuery } from "@/queries/general/SeoQuery";

// const notFoundPageWordPressId = 501;

// export async function generateMetadata(): Promise<Metadata> {
//   const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
//     print(SeoQuery),
//     { slug: notFoundPageWordPressId, idType: "DATABASE_ID" },
//   );

//   const metadata = setSeoData({ seo: contentNode.seo });

//   return {
//     ...metadata,
//     alternates: {
//       canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/404-not-found/`,
//     },
//   } as Metadata;
// }

// export default async function NotFound() {
//   const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
//     id: notFoundPageWordPressId,
//   });

//   return <div dangerouslySetInnerHTML={{ __html: page.content || " " }} />;
// }
