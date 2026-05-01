import { Search } from "lucide-react";

export function DocsHeader() {
  return (
    <section className="max-w-4xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="rounded-full bg-cyan-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
          Official Docs
        </span>
        <span className="text-xs text-slate-400">Updated 2 days ago</span>
      </div>

      <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
        Master your <span className="text-[#0b7f8c]">focus system.</span>
      </h1>

      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
        Everything you need to configure ScrollGuard, optimize your digital
        health, and regain control of your most valuable resource: your
        attention.
      </p>

      <div className="relative mt-10 max-w-3xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
          <Search className="size-4 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search documentation, components, or error codes..."
          className="h-15 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-24 text-sm text-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.05)] outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
          <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-[10px] text-slate-400">
            CMD +
          </span>
        </div>
      </div>
    </section>
  );
}
