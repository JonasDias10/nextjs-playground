import { Button } from "@/shared/components";
import { home } from "./home";

const sendContact = async (data: FormData): Promise<void> => {
  "use server";

  const email = data.get("email")?.toString();
  const message = data.get("message")?.toString();

  console.log({ email, message });
};

export function Contact() {
  const {
    title,
    description,
    emailLabel,
    messageLabel,
    emailPlaceholder,
    messagePlaceholder,
    button,
  } = home.contact;

  return (
    <section id="contact" className="relative">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 rounded-full bg-indigo-500/20 blur-[160px]" />
      </div>

      <div className="relative w-full max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-xl dark:bg-white/5">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
            {title}
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-300">{description}</p>
        </div>

        <form className="mt-10 space-y-6" action={sendContact}>
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {emailLabel}
            </label>

            <input
              type="email"
              name="email"
              placeholder={emailPlaceholder}
              className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 backdrop-blur-md outline-none transition focus:border-indigo-400 dark:text-white dark:placeholder-zinc-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {messageLabel}
            </label>

            <textarea
              rows={5}
              name="message"
              placeholder={messagePlaceholder}
              className="w-full rounded-xl border border-white/20 bg-white/20 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 backdrop-blur-md outline-none transition focus:border-indigo-400 dark:text-white dark:placeholder-zinc-400 resize-none"
            />
          </div>

          <Button color="primary" variant="contained" size="medium" fullWidth>
            {button}
          </Button>
        </form>
      </div>
    </section>
  );
}
