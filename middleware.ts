import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { NextResponse } from "next/server";

// const { auth } = NextAuth(authConfig);
export default NextAuth(authConfig).auth;


// export default auth((req) => {
//   const isLoggedIn = !!req.auth?.user;
//   const url = req.nextUrl;

//   // Logged-in users visiting "/" or "/login" get redirected to "/dashboard"
//   if (isLoggedIn && (url.pathname === "/" || url.pathname === "/login")) {
//     return NextResponse.redirect(new URL("/dashboard", url));
//   }

//   return NextResponse.next();
// });

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};