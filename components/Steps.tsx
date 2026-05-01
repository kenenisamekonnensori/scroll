export function Steps() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-14 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Three steps to stronger control
        </h2>

        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_45px_rgba(15,23,42,0.06)]">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-xl font-bold text-cyan-700">
              01
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">Choose apps</h3>
            <p className="text-slate-600">
              Select the social apps and games you want ScrollGuard to monitor.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_45px_rgba(15,23,42,0.06)]">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-xl font-bold text-cyan-700">
              02
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">Set time limits</h3>
            <p className="text-slate-600">
              Define a daily limit for each app based on your focus goals.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_15px_45px_rgba(15,23,42,0.06)]">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-xl font-bold text-cyan-700">
              03
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900">Auto-block kicks in</h3>
            <p className="text-slate-600">
              Once time runs out, the app is blocked until your next allowed period.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
