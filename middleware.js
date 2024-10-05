import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  // SECRET
  const secret_Key = process.env.NEXTAUTH_SECRET;

  const session = await getToken({ req: req, secret: secret_Key });

  const {
    nextUrl: { pathname },
  } = req;

  if (!session && pathname.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Middleware Login && Logout
  if (session && pathname.includes("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin",
    "/auth",
    "/auth/:path*",
    "/cart",
    "/payment",
    "/shipping",
    "/placeorder",
    "/order-history",
    "/profile",
  ],
};
