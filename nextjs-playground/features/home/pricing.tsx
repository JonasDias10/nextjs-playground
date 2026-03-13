import { home } from "./home";

export function Pricing() {
  const { title, subtitle, plans, mostPopular } = home.pricing;

  return (
    <section id="pricing" className="relative">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 rounded-full bg-purple-500/20 blur-[160px]" />
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
          {plans.map((plan, index) => {
            const highlight = index === 1;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-white/5 ${
                  highlight ? "scale-105 border-purple-400/40" : ""
                }`}
              >
                {highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-1 text-xs font-semibold text-white">
                    {mostPopular}
                  </span>
                )}

                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {plan.description}
                </p>

                <div className="mt-6 text-4xl font-bold text-zinc-900 dark:text-white">
                  {plan.price}
                </div>

                <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-purple-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 rounded-xl px-6 py-3 font-medium transition-all duration-200 ${
                    highlight
                      ? "bg-purple-600 text-white hover:bg-purple-500"
                      : "border border-white/20 bg-white/20 text-zinc-800 backdrop-blur-md hover:bg-white/30 dark:text-white"
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
