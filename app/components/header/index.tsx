import { ModeToggle } from "@/components/mode-toggle"
import { Link } from "react-router"

export function Header() {
  return (
    <header className="max-w-6xl mx-auto min-h-15 flex items-center justify-between px-4  max-md:py-4">
      <div>
        <Link to="/" className="text-xl font-normal hover:text-muted-foreground">
          <span className="">{"<Dima />"}</span>
        </Link>
      </div>

      <div className="">
        <ModeToggle />
      </div>
    </header>
  )
}
