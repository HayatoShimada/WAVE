// WordPress exit preview API route - commented out for simple landing page
// This will be re-enabled when WordPress integration is needed

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Exit preview not available", { status: 404 });
}

// import { draftMode } from "next/headers";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const path = searchParams.get("path");

//   (await draftMode()).disable();

//   const response = NextResponse.redirect(
//     `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
//   );
//   response.headers.set(
//     "Set-Cookie",
//     `wp_jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`,
//   );

//   return response;
// }
