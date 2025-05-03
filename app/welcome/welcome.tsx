import { TypeAnimation } from "react-type-animation";

export function Welcome() {
  return (
    <main className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
      <div className="flex flex-col items-start space-y-8">
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
      </div>
    </main>
  );
}
