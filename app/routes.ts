import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes"
import { flatRoutes } from "@react-router/fs-routes"

const routes = await flatRoutes({ rootDirectory: "routes/blog/" })

// Convert blog folder files to routes
const blogRoutes = routes.map((route) => {
  return {
    id: route.id,
    file: route.file,
    path: `blog/${route.path}`,
    index: undefined,
    caseSensitive: undefined,
  }
})

export default [
  layout("routes/main-layout.tsx", [
    index("routes/home.tsx"),
    ...blogRoutes,
  ]),

  route("action/set-theme", "routes/action/set-theme.ts"),
] satisfies RouteConfig
