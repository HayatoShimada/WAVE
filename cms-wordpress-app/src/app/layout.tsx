// import { draftMode } from "next/headers";
// import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "@/app/globals.css";

// import Navigation from "@/components/Globals/Navigation/Navigation";
// import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // favicon.icoはappディレクトリに配置されているため、Next.jsが自動的に認識します
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isEnabled } = draftMode();

  return (
    <html lang="ja">
      <body>
        {/* {isEnabled && <PreviewNotice />} */}
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
