import Link from "next/link";
import { Button } from "./ui/button";

export function Cta() {
  return (
    <section className="flex justify-center px-4 py-24">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-200 bg-gradient-to-br from-cyan-100 via-white to-sky-100 p-12 text-center md:p-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.9),transparent_36%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.18),transparent_42%)]" />
        <div className="relative z-10">
          <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Ready to focus?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600 md:text-xl">
            Join ScrollGuard and stop wasting hours to addictive feeds. Build
            your own limits and let automatic blocking do the hard part.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-[#0b7f8c] px-8 font-semibold text-white hover:bg-[#086973] sm:w-auto"
            >
              <Link href="/download">Download Android APK</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-full border-slate-300 bg-white px-8 text-slate-700 hover:bg-slate-50 sm:w-auto"
            >
              <Link href="/docs">Setup guide</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
