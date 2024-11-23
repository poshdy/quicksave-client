import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("quicksaveToken");

  if (!token && !pathname.includes("/auth")) {
    const url = new URL(request.url);
    url.pathname =
      pathname === "/auth/sign-up" ? "/auth/sign-up" : "/auth/sign-in";
    console.log(pathname);
    console.log(url.pathname);

    return NextResponse.redirect(url);
  }

  return res;
}
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};
