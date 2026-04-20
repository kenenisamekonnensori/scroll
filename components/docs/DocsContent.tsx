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
    title: "Create your Curator Profile",
    description:
      "During the first launch, ScrollGuard asks for the permissions it needs to track distraction patterns without exposing your private content.",
  },
  {
    title: "Sync your Devices",
    description:
      "Connect mobile and desktop sessions so your focus rules, blocklists, and progress stay aligned across every screen.",
  },
  {
    title: "Define your Core Metrics",
    description:
      "Start with one measurable target, such as 90 minutes of uninterrupted work or a daily scroll budget you can actually maintain.",
  },
];

const installOptions = [
  "macOS Silicon",
  "Windows v11+",
  "iOS / Android",
];

const featureCards = [
  {
    title: "Focus Sessions",
    description:
      "Launch timed protection modes with a clear start, finish, and interruption policy.",
  },
  {
    title: "Smart Blocking",
    description:
      "Adjust hard blocks, friction prompts, and cooldown windows per app or website.",
  },
  {
    title: "Daily Reports",
    description:
      "Track attention loss, recoverable minutes, and the rules that are doing real work.",
  },
];

const troubleshootingCards = [
  {
    code: "ERR_SYNC_04",
    title: "Cloud Sync Failed",
    description:
      "Confirm network access, then retry account sync from the device settings screen.",
  },
  {
    code: "PERM_BLOCK",
    title: "Permissions Missing",
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
    code: "AUTH_TIMEOUT",
    title: "Session Expired",
    description:
      "Sign in again and verify the device clock is set automatically before retrying sync.",
  },
];

export function DocsContent() {
  return (
    <div className="mt-8 space-y-6 pb-16">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_320px]">
        <section
          id="getting-started"
          className="rounded-[28px] bg-white p-8 shadow-[0_14px_50px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 md:p-10"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Getting Started
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Use this guide to launch your first focus session in under 2
                minutes.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eef0ff] p-3 text-[#4b53c8]">
              <Rocket className="size-5" />
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {gettingStartedSteps.map((step, index) => (
              <article key={step.title} className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eef0ff] text-sm font-bold text-[#4b53c8]">
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
          className="rounded-[28px] bg-[#eef1f6] p-8 ring-1 ring-slate-200/70"
        >
          <div className="inline-flex rounded-2xl bg-white p-3 text-[#4b53c8] shadow-sm ring-1 ring-slate-200/70">
            <Download className="size-5" />
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">
            Installation
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Placeholder downloads for every major platform.
          </p>

          <div className="mt-8 space-y-3">
            {installOptions.map((option) => (
              <button
                key={option}
                type="button"
                className="flex w-full items-center justify-between rounded-2xl bg-white px-4 py-4 text-left text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:text-slate-950"
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
          className="rounded-[28px] bg-[#eef1f6] p-8 ring-1 ring-slate-200/70"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-white p-3 text-[#4b53c8] shadow-sm ring-1 ring-slate-200/70">
              <Flag className="size-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Setting Limits
            </h2>
          </div>

          <div className="rounded-[24px] bg-[#2f3441] p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="rounded-[20px] border border-white/10 bg-[#3a4150] p-4">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white/60" />
                <div className="h-2 w-2 rounded-full bg-white/30" />
                <div className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-28 rounded-full bg-white/20" />
                <div className="grid grid-cols-[1fr_88px] gap-3">
                  <div className="rounded-2xl bg-white/6 p-3">
                    <div className="mb-3 h-2.5 w-20 rounded-full bg-white/20" />
                    <div className="space-y-2">
                      <div className="h-9 rounded-xl bg-white/10" />
                      <div className="h-9 rounded-xl bg-white/10" />
                      <div className="h-9 rounded-xl bg-white/10" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-18 rounded-2xl bg-white/10" />
                    <div className="h-18 rounded-2xl bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Placeholder visual for a future limits setup guide. Use this block
            for screenshots, a short walkthrough video, or a step-based setup
            checklist.
          </p>
        </section>

        <section
          id="troubleshooting"
          className="rounded-[28px] bg-white p-8 shadow-[0_14px_50px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 md:p-10"
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
                className="rounded-3xl bg-[#f8fafc] p-5 ring-1 ring-slate-200/70 transition hover:bg-white hover:shadow-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4b53c8]">
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
        className="rounded-[32px] bg-[linear-gradient(135deg,#ffffff_0%,#f3f5ff_52%,#eef3f8_100%)] p-8 shadow-[0_14px_50px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/70 md:p-10"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b53c8] ring-1 ring-slate-200/70">
              Placeholder Section
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Key Features
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Use these cards as starter content blocks for the core product
              capabilities you want to document next.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-3 text-[#4b53c8] shadow-sm ring-1 ring-slate-200/70">
            <Sparkles className="size-5" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl bg-white/90 p-6 backdrop-blur ring-1 ring-slate-200/80"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[#eef0ff] text-[#4b53c8]">
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
