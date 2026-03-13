import { home } from "./home";

export function Features() {
  const { title, subtitle, items } = home.features;

  const colors = [
    "from-purple-500/20 to-pink-500/20",
    "from-blue-500/20 to-cyan-500/20",
    "from-emerald-500/20 to-teal-500/20",
    "from-orange-500/20 to-red-500/20",
  ];

  return (
    <section id="features" className="relative">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 rounded-full bg-indigo-500/20 blur-[160px]" />
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-white/5"
            >
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-br ${colors[index]}`}
              />

              <div className="relative">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
