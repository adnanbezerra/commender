import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    if (process.env.NODE_ENV !== "production") {
        return NextResponse.next();
    }

    const { pathname } = request.nextUrl;
    const isStaticAsset =
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/stitch") ||
        pathname === "/favicon.ico" ||
        /\.(?:png|jpg|jpeg|gif|webp|svg|ico|txt|xml|json|map)$/i.test(pathname);

    if (pathname === "/lp" || isStaticAsset) {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = "/lp";
    url.search = "";

    return NextResponse.redirect(url);
}

export const config = {
    matcher: "/:path*",
};
