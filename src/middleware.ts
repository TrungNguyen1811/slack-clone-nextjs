import { convexAuthNextjsMiddleware, createRouteMatcher } from "@convex-dev/auth/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export function nextjsMiddlewareRedirect(
  request: NextRequest,
  pathname: string,
) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.redirect(url);
}

const isPublicPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware((request, { convexAuth }) => {
  if (isPublicPage(request) && convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, "/");
  }

  if (!isPublicPage(request) && !convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
