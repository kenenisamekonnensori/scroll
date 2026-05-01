import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Steps } from "@/components/Steps";
import { Minimalist } from "@/components/Minimalist";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

//copilot --resume=15cd4d75-e9ab-4a6b-a6a2-08a1983cd351
export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7fbfd] text-slate-900">
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Steps />
        <Minimalist />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
