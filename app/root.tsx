import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router"

import type { Route } from "./+types/root"
import "./app.css"
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"
import { themeSessionResolver } from "./modules/color-scheme/server"
import clsx from "clsx"

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Roboto:wght@500&display=swap",
  },
]

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)
  return {
    theme: getTheme(),
  }
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderWrapper>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProviderWrapper>
  )
}

function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useLoaderData<typeof loader>()

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      {children}
    </ThemeProvider>
  )
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body className="min-h-dvh">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
