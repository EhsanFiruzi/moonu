import { NextRequest, NextResponse } from "next/server";

const locales = ["fa", "en"];

// Next 16: "proxy" replaces "middleware". Redirects "/" to the device language.
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)))
    return NextResponse.next();
  const pref = (req.headers.get("accept-language") ?? "")
    .split(",")
    .map((s) => s.trim().slice(0, 2).toLowerCase())
    .find((l) => locales.includes(l));
  const url = req.nextUrl.clone();
  url.pathname = `/${pref ?? "en"}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/((?!_next|assets|api|.*\\..*).*)"] };
