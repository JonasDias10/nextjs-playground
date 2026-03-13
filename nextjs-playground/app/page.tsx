import {
  Contact,
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

      <main className="flex min-h-screen flex-col items-center justify-center gap-48 px-6 py-40 w-full max-w-7xl mx-auto">
        <Hero />

        <Features />

        <Pricing />

        <Testimonials />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
