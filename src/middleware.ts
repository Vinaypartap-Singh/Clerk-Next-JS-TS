import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Routes that can be accessed while signed out
    publicRoutes: ['/', '/sign-in', '/sign-up', '/forgot-password', '/forget-password'],
});

export const config = {
    // Adjusted matcher to include additional routes for Clerk authentication
    // and exclude static files and Next.js internal routes
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)",
        "/",
        "/(api|trpc)(.*)",
        "/forget-password"
    ],
};
