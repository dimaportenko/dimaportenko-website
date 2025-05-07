import { ContactButton } from "./contact-button"
import { LinkedInButton } from "./linkedin-button"

const contactsData = [
  { href: "https://github.com/dimaportenko", name: "github" },
  {
    href: "https://bsky.app/profile/dimaportenko.bsky.social",
    name: "bluesky",
  },
  {
    href: "https://www.upwork.com/freelancers/~019a1afcd3f56e9469",
    name: "upwork",
  },
  { href: "mailto:dvportenko@gmail.com", name: "gmail" },
  {
    href: "https://www.youtube.com/channel/UCReKeeIMZywvQoaZPZKzQbQ/",
    name: "youtube",
  },
  { href: "https://twitter.com/dimaportenko", name: "x" },
  {
    href: "https://stackoverflow.com/users/923497/dima-portenko",
    name: "stackoverflow",
  },
  { href: "https://dev.to/dimaportenko", name: "devdotto" },
  { href: "https://www.twitch.tv/lost_semicolon", name: "twitch" },
  { href: "https://www.reddit.com/user/Puzzleheaded_Cheek26", name: "reddit" },
]

export function ContactButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      {contactsData.map((contact) => (
        <ContactButton
          key={contact.name}
          href={contact.href}
          name={contact.name}
        />
      ))}
      <LinkedInButton />
    </div>
  )
}
