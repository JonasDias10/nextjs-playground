export function Footer() {
  return (
    <footer className="relative mt-16 w-full bg-white/10 backdrop-blur-xl border-t border-gray-200/40 py-10 text-center dark:bg-black/10">
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-40 w-100 rounded-full bg-purple-500/20 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-4 flex justify-center space-x-6">
          <a
            href="#"
            className="text-zinc-900 dark:text-white transition-colors duration-200 hover:text-purple-500"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-zinc-900 dark:text-white transition-colors duration-200 hover:text-purple-500"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-zinc-900 dark:text-white transition-colors duration-200 hover:text-purple-500"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-sm text-zinc-700 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Next.js Playground. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
