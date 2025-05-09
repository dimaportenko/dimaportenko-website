import { TypeAnimation } from "react-type-animation"
import { FloatingProfile } from "@/components/floating-profile"
import { ContactButtons } from "@/components/contact-buttons"

export function Welcome() {
  return (
    <main className="container mx-auto px-4 py-4 md:py-32 max-w-6xl">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8">
        <div className="flex flex-col space-y-4 max-md:space-y-10 justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Hi, I'm Dima Portenko.</span>
            </h1>

            <div className="text-xl md:text-2xl font-mono text-muted-foreground h-16 md:h-24">
              <TypeAnimation
                sequence={[
                  "I love to code, learn, and share.",
                  1000,
                  "I build mobile apps, websites, tools, and more.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="inline-block"
              />
              <span className="inline-block animate-blink">_</span>
            </div>
          </div>

          <ContactButtons />
        </div>

        <div className="max-md:order-first max-md:mx-auto px-4">
          <FloatingProfile />
        </div>
      </div>
    </main>
  )
}
