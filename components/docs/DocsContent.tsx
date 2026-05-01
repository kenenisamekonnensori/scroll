import Image from "next/image";
import {
  ArrowRight,
  Download,
  Flag,
  Rocket,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

const gettingStartedSteps = [
  {
    title: "Complete onboarding permissions",
    description:
      "On first launch, allow accessibility, usage access, and overlay permissions so ScrollGuard can track usage and enforce limits correctly.",
  },
  {
    title: "Choose apps to monitor",
    description:
      "Select the apps that usually pull your attention, such as social feeds, short-video apps, and games.",
  },
  {
    title: "Set limits and blocking mode",
    description:
      "Set your daily time caps and choose whether apps should show warnings first or block immediately once time runs out.",
  },
];

const installOptions = ["Android APK", "Permission checklist", "First session setup"];

const featureCards = [
  {
    title: "Focus Sessions",
    description:
      "Start distraction-protected sessions with clear start/end windows and strict app rules.",
  },
  {
    title: "Smart Blocking",
    description:
      "Switch between warning mode and hard block mode for each app based on your goals.",
  },
  {
    title: "Daily Reports",
    description:
      "Review app-by-app usage and track whether your limits are reducing doomscrolling.",
  },
];

const troubleshootingCards = [
  {
    code: "PERM_USAGE_01",
    title: "Usage Access Disabled",
    description:
      "Re-enable usage access in Android settings so ScrollGuard can read app activity.",
  },
  {
    code: "PERM_BLOCK",
    title: "Overlay Permission Missing",
    description:
      "Re-open the onboarding checklist and re-enable the required accessibility and overlay permissions.",
  },
  {
    code: "BATTERY_OP",
    title: "Background Paused",
    description:
      "Disable aggressive battery optimization so scheduled sessions can keep running.",
  },
  {
    code: "RULES_NOT_APPLYING",
    title: "Rules Not Applying",
    description:
      "Confirm battery optimization is disabled and that ScrollGuard is allowed to run in the background.",
  },
];

export function DocsContent() {
  return (
    <div className="mt-8 space-y-6 pb-16">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_320px]">
        <section
          id="getting-started"
          className="sg-docs-panel rounded-[28px] bg-white p-8 shadow-[0_14px_50px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 md:p-10"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Getting Started
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Use this guide to set up app limits and automatic blocking in just
                a few minutes.
              </p>
            </div>
            <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
              <Rocket className="size-5" />
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {gettingStartedSteps.map((step, index) => (
              <article key={step.title} className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="installation"
          className="sg-docs-panel rounded-[28px] bg-cyan-50 p-8 ring-1 ring-cyan-100"
        >
          <div className="inline-flex rounded-2xl bg-white p-3 text-cyan-700 shadow-sm ring-1 ring-slate-200/70">
            <Download className="size-5" />
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">
            Installation
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Follow these quick items to install and configure ScrollGuard
            correctly.
          </p>

          <div className="mt-8 space-y-3">
            {installOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="sg-docs-card flex w-full items-center justify-between rounded-2xl bg-white px-4 py-4 text-left text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:text-slate-950"
              >
                <span>{option}</span>
                <ArrowRight className="size-4 text-slate-400" />
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <section
          id="setting-limits"
          className="sg-docs-panel relative overflow-hidden rounded-[28px] bg-cyan-50 p-8 ring-1 ring-cyan-100"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-200/55 blur-3xl" />
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white p-3 text-cyan-700 shadow-sm ring-1 ring-slate-200/70">
              <Flag className="size-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Setting Limits
            </h2>
          </div>

          <div className="sg-docs-card relative rounded-[24px] border border-cyan-200/70 bg-white/70 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="sg-docs-phone mx-auto w-[190px] rounded-[1.9rem] border-[6px] border-slate-900 bg-slate-900 p-1.5 shadow-[0_14px_30px_rgba(2,8,23,0.22)]">
              <div className="relative h-[320px] overflow-hidden rounded-[1.45rem] bg-[#f4f7fb]">
                <Image
                  src="/screenshots/limit-view.png"
                  alt="ScrollGuard limit view shown when an app is blocked"
                  width={640}
                  height={1280}
                  className="h-full w-full object-contain object-top"
                />
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            This is the exact screen users see when an app is blocked after
            hitting the set limit. Start with realistic caps, then tighten them
            as consistency improves.
          </p>
        </section>

        <section
          id="troubleshooting"
          className="sg-docs-panel rounded-[28px] bg-white p-8 shadow-[0_14px_50px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 md:p-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-[#fff1f1] p-3 text-[#e25b5b]">
              <TriangleAlert className="size-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Troubleshooting
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {troubleshootingCards.map((card) => (
                <article
                  key={card.code}
                  className="sg-docs-card rounded-3xl bg-[#f8fafc] p-5 ring-1 ring-slate-200/70 transition hover:bg-white hover:shadow-sm"
                >
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-700">
                  {card.code}
                </p>
                <h3 className="mt-2 font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section
        id="key-features"
        className="sg-docs-panel rounded-[32px] bg-[linear-gradient(135deg,#ffffff_0%,#f0fbff_52%,#edf8ff_100%)] p-8 shadow-[0_14px_50px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/70 md:p-10"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700 ring-1 ring-slate-200/70">
              Product Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Key Features
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Core building blocks that make ScrollGuard useful for daily focus
              and long-term habit change.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-3 text-cyan-700 shadow-sm ring-1 ring-slate-200/70">
            <Sparkles className="size-5" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="sg-docs-card rounded-3xl bg-white/90 p-6 backdrop-blur ring-1 ring-slate-200/80"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
