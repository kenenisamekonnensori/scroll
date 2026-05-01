import Link from "next/link";
import {
  AlertCircle,
  Download,
  Flag,
  Rocket,
  Sparkles,
} from "lucide-react";

const docsSections = [
  {
    href: "#getting-started",
    label: "Getting Started",
    icon: Rocket,
  },
  {
    href: "#installation",
    label: "Installation",
    icon: Download,
  },
  {
    href: "#setting-limits",
    label: "Setting Limits",
    icon: Flag,
  },
  {
    href: "#key-features",
    label: "Key Features",
    icon: Sparkles,
  },
  {
    href: "#troubleshooting",
    label: "Troubleshooting",
    icon: AlertCircle,
  },
];

export function DocsSidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200/80 bg-white/60 px-6 py-10 lg:block">
      <div className="sticky top-24">
        <div className="mb-8">
          <p className="text-sm font-semibold text-cyan-700">Documentation</p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            User Guide
          </p>
        </div>

        <nav aria-label="Documentation sections">
          <ul className="space-y-1">
            {docsSections.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-cyan-50 hover:text-slate-900"
                >
                  <Icon className="size-4 text-slate-400" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
