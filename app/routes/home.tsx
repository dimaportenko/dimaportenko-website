import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dima Portenko Webspace" },
    { name: "description", content: "Welcome to Dima Portenko Webspace!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
