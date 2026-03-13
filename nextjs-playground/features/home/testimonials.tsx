import { home } from "./home";

export function Testimonials() {
  const { title, subtitle, items } = home.testimonials;

  return (
    <section id="testimonials" className="relative">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 rounded-full bg-pink-500/20 blur-[160px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            {title}
          </h2>

          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.author}
              className="relative rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-white/5"
            >
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                “{item.quote}”
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 text-sm font-semibold text-white">
                  {item.author.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {item.author}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
