import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/main-layout.tsx", [index("routes/home.tsx")]),

  route("action/set-theme", "routes/action/set-theme.ts"),
] satisfies RouteConfig;
