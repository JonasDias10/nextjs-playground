import { Button } from "./button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-md dark:bg-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Next.js Playground
        </h1>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#hero"
            className="text-zinc-800 dark:text-white hover:text-purple-500"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-zinc-800 dark:text-white hover:text-purple-500"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-zinc-800 dark:text-white hover:text-purple-500"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-zinc-800 dark:text-white hover:text-purple-500"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-zinc-800 dark:text-white hover:text-purple-500"
          >
            Contact
          </a>
          <Button variant="contained" color="primary" size="small">
            Get Started
          </Button>
        </nav>

        <div className="cursor-pointer text-zinc-900 dark:text-white md:hidden">
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-zinc-900 dark:bg-white transition-transform duration-300 group-hover:rotate-45 group-hover:translate-y-2"></span>
            <span className="block h-0.5 w-6 bg-zinc-900 dark:bg-white transition-opacity duration-300 group-hover:opacity-0"></span>
            <span className="block h-0.5 w-6 bg-zinc-900 dark:bg-white transition-transform duration-300 group-hover:-rotate-45 group-hover:-translate-y-2"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
