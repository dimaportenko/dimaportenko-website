import { Link } from "react-router"
import { Button } from "@/components/ui/button"

export function ContactButton({ href, name }: { href: string; name: string }) {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link to={href} target="_blank" rel="noopener noreferrer">
        <img
          src={`https://cdn.simpleicons.org/${name}/101828`}
          alt={name}
          width="22"
          height="22"
          className="h-5 w-5 dark:hidden"
        />
        <img
          src={`https://cdn.simpleicons.org/${name}/ffffff`}
          alt={name}
          width="22"
          height="22"
          className="h-5 w-5 dark:block hidden"
        />
      </Link>
    </Button>
  )
}
