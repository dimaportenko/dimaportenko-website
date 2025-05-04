import { env } from "cloudflare:workers";
import { createCookieSessionStorage } from "react-router";
import { createThemeSessionResolver } from "remix-themes";

// You can default to 'development' if process.env.NODE_ENV is not set
const isProduction = process.env.NODE_ENV === "production";
const themeSecret = env.COLOR_SCHEME_SECRET;

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: [themeSecret],
    // Set domain and secure only if in production
    ...(isProduction
      ? { domain: "dimaportenko.dvportenko.workers.dev", secure: true }
      : {}),
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
