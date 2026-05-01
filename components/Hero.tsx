import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-10 sm:pt-12">
      <div className="sg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="sg-orb sg-orb-a pointer-events-none absolute -left-24 top-6 -z-10" />
      <div className="sg-orb sg-orb-b pointer-events-none absolute right-0 top-4 -z-10" />
      <div className="sg-orb sg-orb-c pointer-events-none absolute bottom-10 left-1/2 -z-10" />

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-cyan-700">
            FOCUS WITH AUTOMATION
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Stop endless scrolling.
            <br />
            <span className="bg-gradient-to-r from-cyan-700 to-sky-500 bg-clip-text text-transparent">
              Scroll with intention.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            ScrollGuard tracks your app usage, enforces your custom limits, and
            blocks distracting apps automatically when time is up.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-full bg-[#0b7f8c] px-7 text-base font-semibold text-white hover:bg-[#086973]"
            >
              <Link href="/download">Download APK</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-full border-slate-300 bg-white px-7 text-base text-slate-700 hover:bg-slate-50"
            >
              <Link href="/docs">Read docs</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
              App-level limits
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
              Smart hard blocks
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
              Weekly usage reports
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[390px]">
          <div className="sg-card relative rounded-[30px] border border-cyan-100 bg-gradient-to-b from-cyan-50/90 to-white p-4 shadow-[0_26px_70px_rgba(15,23,42,0.12)]">
            <div className="mx-auto w-[220px] rounded-[2.2rem] border-[8px] border-slate-900 bg-slate-900 p-2 shadow-[0_18px_40px_rgba(2,8,23,0.26)]">
              <div className="relative h-[430px] overflow-hidden rounded-[1.8rem] bg-[#f4f7fb]">
                <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-900/70" />
                <Image
                  src="/screenshots/dashboard.png"
                  alt="ScrollGuard dashboard inside Android phone mockup"
                  width={720}
                  height={1460}
                  className="h-full w-full object-cover object-top"
                  priority
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/25 to-transparent" />
              </div>
            </div>
          </div>

          <div className="sg-soft-float absolute left-0 top-20 hidden rounded-2xl border border-cyan-100 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.1)] md:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
              Daily Limit
            </p>
            <p className="mt-1 text-lg font-bold text-cyan-700">2h 30m</p>
          </div>

          <div className="sg-soft-float sg-soft-float-delay absolute bottom-16 right-0 hidden rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.1)] md:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
              Blocked Today
            </p>
            <p className="mt-1 text-lg font-bold text-emerald-600">4 Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
