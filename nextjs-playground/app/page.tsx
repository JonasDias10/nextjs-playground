import {
  Contact,
  FAQ,
  Features,
  Hero,
  Pricing,
  Testimonials,
} from "@/features/home";
import { Footer, Header } from "@/shared/components";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Hero />

        <Features />

        <Pricing />

        <Testimonials />

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
