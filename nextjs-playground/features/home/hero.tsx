import { Button } from "@/shared/components";
import { home } from "./home";

export function Hero() {
  const {
    badge,
    title,
    subtitle,
    description,
    primaryButton,
    secondaryButton,
  } = home.hero;

  return (
    <section id="hero" className="relative">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 animate-pulse rounded-full bg-purple-500/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl dark:bg-white/5">
        <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/20 px-4 py-1 text-sm font-medium text-zinc-700 backdrop-blur-md dark:text-zinc-200">
          {badge}
        </span>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
          {subtitle}
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="contained" color="primary" size="medium">
            {primaryButton}
          </Button>

          <Button variant="outlined" size="medium">
            {secondaryButton}
          </Button>
        </div>
      </div>
    </section>
  );
}
