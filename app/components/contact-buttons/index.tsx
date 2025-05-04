import { ContactButton } from "./contact-button";
import { LinkedInButton } from "./linkedin-button";

export function ContactButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <ContactButton href="https://github.com/dimaportenko" name="github" />
      <ContactButton
        href="https://bsky.app/profile/dimaportenko.bsky.social"
        name="bluesky"
      />
      <ContactButton
        href="https://www.upwork.com/freelancers/~019a1afcd3f56e9469"
        name="upwork"
      />
      <ContactButton href="mailto:dvportenko@gmail.com" name="gmail" />
      <ContactButton
        href="https://www.youtube.com/channel/UCReKeeIMZywvQoaZPZKzQbQ/"
        name="youtube"
      />
      <LinkedInButton />
      <ContactButton href="https://twitter.com/dimaportenko" name="x" />
      <ContactButton
        href="https://stackoverflow.com/users/923497/dima-portenko"
        name="stackoverflow"
      />
      <ContactButton href="https://dev.to/dimaportenko" name="devdotto" />
      <ContactButton
        href="https://www.twitch.tv/lost_semicolon"
        name="twitch"
      />
    </div>
  );
}
