import { Header } from "@/components/header"
import { Outlet } from "react-router"

export default function MainLayout() {
  return (
    <div className="">
      <Header />
      <main className="container mx-auto px-4 py-4 md:py-32 max-w-6xl">
        <Outlet />
      </main>
    </div>
  )
}
