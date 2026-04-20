import {
  ArrowDownToLine,
  QrCode,
  Settings,
  Shield,
  Smartphone,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const installSteps = [
  {
    title: "Enable Unknown Sources",
    description:
      "Go to Settings > Security and toggle on Install from Unknown Sources for your browser or file manager.",
    icon: Settings,
  },
  {
    title: "Install the APK",
    description:
      "Locate the downloaded file in your Downloads folder and tap it to begin the installation process.",
    icon: Smartphone,
  },
  {
    title: "Grant Permissions",
    description:
      "Follow the on-screen prompts to allow ScrollGuard to overlay over other apps and manage notification access.",
    icon: Shield,
  },
];

const trustedBy = ["HealthTech", "NeuroMind", "FocusLabs", "ZenSystem"];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-900">
      <Navbar active="download" />

      <main className="px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          <section className="text-center">
            <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Reclaim Your <span className="text-[#4b53c8]">Attention.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
              Download the ScrollGuard APK and transform your relationship with
              your device. Minimalist, powerful, and private.
            </p>
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_300px]">
            <div className="rounded-[28px] bg-white p-8 shadow-[0_18px_60px_rgba(148,163,184,0.14)] ring-1 ring-slate-200/80 md:p-10">
              <span className="inline-flex rounded-full bg-[#edf2f5] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a97a1]">
                Latest Version: v2.4.1
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">
                Android Application
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
                Experience the full suite of blocking tools and distraction-free
                workflows directly on your smartphone.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="flex min-h-[68px] items-center gap-4 rounded-2xl bg-[#4b53c8] px-5 text-left text-white shadow-[0_12px_30px_rgba(75,83,200,0.28)] transition hover:bg-[#3f47b2]"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-white/12 ring-1 ring-white/20">
                    <ArrowDownToLine className="size-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                      Download Now
                    </p>
                    <p className="mt-1 text-xl font-semibold">ScrollGuard.apk</p>
                  </div>
                </button>

                <div className="text-sm text-slate-500">
                  <p>SHA-256: 8f4c2e...</p>
                  <p>Size: 24.5 MB</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#f1f3f7] p-6 text-center ring-1 ring-slate-200/80">
              <div className="mx-auto flex h-[122px] w-[122px] items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80">
                <div className="flex h-[88px] w-[88px] items-center justify-center rounded-sm bg-[#444]">
                  <div className="relative h-[62px] w-[62px] bg-white p-1">
                    <div className="grid h-full w-full grid-cols-5 gap-[2px] bg-white">
                      {Array.from({ length: 25 }).map((_, index) => (
                        <div
                          key={index}
                          className={
                            [
                              0, 1, 2, 5, 7, 10, 11, 13, 16, 17, 20, 22, 23, 24,
                            ].includes(index)
                              ? "bg-[#444]"
                              : "bg-white"
                          }
                        />
                      ))}
                    </div>
                    <QrCode className="absolute inset-0 m-auto size-8 text-transparent" />
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                Scan to Mobile
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Point your camera to download directly to your Android device.
              </p>
            </div>
          </section>

          <section className="mt-8 rounded-[28px] bg-white p-8 shadow-[0_18px_60px_rgba(148,163,184,0.1)] ring-1 ring-slate-200/80 md:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              {installSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article key={step.title}>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#eef0ff] text-[#4b53c8]">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mt-16 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
              Trusted by Digital Health Professionals
            </p>
            <div className="mt-8 grid gap-6 text-3xl font-semibold text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
              {trustedBy.map((brand) => (
                <p key={brand}>{brand}</p>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
