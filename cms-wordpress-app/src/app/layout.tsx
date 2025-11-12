// import { draftMode } from "next/headers";
// import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "@/app/globals.css";

// import Navigation from "@/components/Globals/Navigation/Navigation";
// import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isEnabled } = draftMode();

  return (
    <html lang="ja">
      <head>
        <link
          rel="icon"
          href="/icon_light.png"
          media="(prefers-color-scheme: light)"
          type="image/png"
        />
        
        <link
          rel="icon"
          href="/icon_dark.png"
          media="(prefers-color-scheme: dark)"
          type="image/png"
        />
      </head>
      <body>
        {/* {isEnabled && <PreviewNotice />} */}
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
