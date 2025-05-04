import { Welcome } from "../welcome/welcome"

export function meta() {
  return [
    { title: "Dima Portenko Webspace" },
    { name: "description", content: "Welcome to Dima Portenko Webspace!" },
  ]
}

export default function Home() {
  return <Welcome />
}
