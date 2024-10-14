import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/site", "/api/uploadthing","/agency(.*)"]); // Define public routes

export default clerkMiddleware(
  (auth, req) => {
    if (!isPublicRoute(req)) {
     
       auth().protect( )
    }
  },
  { debug: true }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
