import { Ban, BarChart3, Clock, TrendingUp } from "lucide-react";

const usageSeries = [
  { app: "TikTok", value: 76 },
  { app: "Instagram", value: 58 },
  { app: "YouTube", value: 64 },
  { app: "X", value: 41 },
  { app: "Snapchat", value: 35 },
  { app: "Threads", value: 27 },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden px-4 py-24">
      <div className="sg-features-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="sg-features-orb sg-features-orb-a pointer-events-none absolute -left-24 top-20 -z-10" />
      <div className="sg-features-orb sg-features-orb-b pointer-events-none absolute right-0 top-10 -z-10" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Precision focus tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Build healthier digital habits with tracking, limits, and automatic
            blocking that respects your rules.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="sg-feature-card rounded-3xl border border-cyan-100 bg-white/95 p-8 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur md:col-span-2">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
              <BarChart3 size={24} />
            </div>
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-slate-900">Track usage by app</h3>
              <div className="sg-pill-pulse inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <TrendingUp size={14} />
                Trending down
              </div>
            </div>
            <p className="mt-3 mb-8 max-w-md text-slate-600">
              See exactly where your time goes with app-by-app insights and trend
              reports.
            </p>

            <div className="sg-graph-panel relative h-56 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[length:100%_22%]" />
              <div className="pointer-events-none absolute inset-x-0 top-6 h-20 bg-gradient-to-b from-cyan-200/20 to-transparent" />

              <svg
                viewBox="0 0 320 120"
                className="pointer-events-none absolute inset-x-6 top-7 h-24 w-[calc(100%-3rem)]"
                aria-hidden="true"
              >
                <polyline
                  points="0,86 52,65 104,72 156,48 208,79 260,58 320,42"
                  fill="none"
                  stroke="rgb(14 165 233)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="sg-graph-line"
                />
              </svg>

              <div className="absolute bottom-6 left-5 right-5 grid grid-cols-6 items-end gap-2">
                {usageSeries.map((item, idx) => (
                  <div key={item.app} className="flex flex-col items-center gap-2">
                    <div className="h-30 flex w-full items-end justify-center">
                      <div
                        className="sg-graph-bar w-full rounded-md bg-gradient-to-t from-cyan-600 to-sky-400"
                        style={{
                          height: `${item.value}%`,
                          animationDelay: `${idx * 120}ms`,
                        }}
                      />
                    </div>
                    <p className="truncate text-[10px] font-semibold text-slate-500">
                      {item.app}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sg-feature-card rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-[0_20px_55px_rgba(15,23,42,0.06)] backdrop-blur">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Set custom limits</h3>
            <p className="mt-3 text-slate-600">
              Configure daily caps per app, from gentle reminders to strict hard
              limits.
            </p>
          </div>

          <div className="sg-feature-card rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-[0_20px_55px_rgba(15,23,42,0.06)] backdrop-blur">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
              <Ban size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Block automatically</h3>
            <p className="mt-3 text-slate-600">
              When limit time is reached, ScrollGuard can lock the selected app
              until your allowed window resets.
            </p>
          </div>

          <div className="sg-feature-card rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-8 md:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900">Serious about focus</h3>
            <p className="mt-3 max-w-xl text-slate-600">
              Designed for students, makers, and professionals who need strong
              boundaries against addictive social feeds.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-6 w-12 rounded-full bg-cyan-200 p-1">
                <div className="h-4 w-4 rounded-full bg-cyan-700" />
              </div>
              <span className="text-xs font-semibold tracking-[0.16em] text-cyan-700">
                FOCUS MODE ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
