import Link from "next/link";
import { ArrowRight, AtSign, Share2 } from "lucide-react";

const footerGroups = [
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/security", label: "Security" },
      { href: "/help", label: "Help Center" },
    ],
  },
];

export function DocsFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200/80 pt-10">
      <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between xl:flex-1">
          <div className="min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              ScrollGuard
            </h3>
            <p className="mt-3 max-w-xs text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              © 2026 ScrollGuard. Designed for digital focus.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Connect
            </p>
            <div className="mt-4 flex items-center gap-3 text-slate-400">
              <Link
                href="/share"
                className="rounded-xl p-2 transition hover:bg-white hover:text-slate-700"
              >
                <Share2 className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="rounded-xl p-2 transition hover:bg-white hover:text-slate-700"
              >
                <AtSign className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 xl:items-end">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Did this page help?
            </p>
            <div className="mt-3 flex gap-3">
              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Yes
              </button>
              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                No
              </button>
            </div>
          </div>

          <div className="text-left xl:text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Next Up
            </p>
            <Link
              href="#installation"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-800"
            >
              Installation Guide
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
