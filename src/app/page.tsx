import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-accent/30">
      {/* Background Orbs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 transition-all duration-300">
        <div className="mb-12 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/5 p-4 ring-1 ring-primary/10 transition-transform duration-500 hover:rotate-12">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={60}
            height={12}
            priority
          />
        </div>

        <div className="max-w-3xl text-center">
          <h1 className="mb-6 bg-gradient-to-b from-primary to-primary/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            A New Era of Next.js Performance
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-foreground/60 sm:text-xl">
            Experience the future of web development with lightning-fast builds,
            seamless routing, and a developer experience like no other
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://nextjs.org/docs"
              className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 font-semibold text-background transition-all hover:scale-105 active:scale-95 sm:w-auto"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-accent to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <a
              href="https://github.com/vercel/next.js"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex h-14 w-full items-center justify-center rounded-full px-8 font-semibold transition-all hover:bg-white/10 active:scale-95 sm:w-auto"
            >
              Star on GitHub
            </a>
          </div>
        </div>

        {/* Feature Grid Mockup */}
        <div className="mt-24 grid w-full max-w-5xl gap-6 sm:grid-cols-3">
          {[
            {
              title: "App Router",
              description:
                "The most powerful routing system for the modern web.",
            },
            {
              title: "Turbopack",
              description:
                "Next-gen bundler for instantaneous development speed.",
            },
            {
              title: "Server Actions",
              description:
                "Mutation made easy with direct server communication.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="glass group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <h3 className="mb-3 text-xl font-bold group-hover:text-accent">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <footer className="absolute bottom-8 text-sm text-foreground/40">
          Powered by{" "}
          <span className="font-semibold text-foreground/70">Vercel</span> &{" "}
          <span className="font-semibold text-foreground/70">PNPM</span>
        </footer>
      </main>
    </div>
  );
}
