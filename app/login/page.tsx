import Link from "next/link";
import { AdminLoginForm } from "@/components/login/AdminLoginForm";
import { isAdminAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

const footerGroups = [
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms of Service",
    href: "/terms",
  },
  {
    title: "Security",
    href: "/security",
  },
  {
    title: "Help Center",
    href: "/help",
  },
];

export default async function LoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-900">
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-2xl font-black tracking-tight text-slate-950">
              ScrollGuard
            </Link>
            <span className="rounded-full bg-[#e8edf4] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6f879c]">
              Admin
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/docs#troubleshooting" className="transition hover:text-slate-950">
              Support
            </Link>
            <Link href="/docs" className="transition hover:text-slate-950">
              Security Docs
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,#eef0ff_0%,#f7f8fb_58%,transparent_100%)]" />
        <div className="absolute left-[-120px] top-[140px] h-72 w-72 rounded-full bg-[#eef0ff]/70 blur-3xl" />
        <div className="absolute right-[-120px] top-[120px] h-80 w-80 rounded-full bg-[#eff4fb] blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-[1280px] flex-col justify-between px-6 py-14">
          <div className="flex flex-1 items-start justify-center pt-8 md:pt-12">
            <AdminLoginForm />
          </div>

          <footer className="mt-16 flex flex-col gap-8 border-t border-transparent pt-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-3xl font-black tracking-tight text-slate-900">
                ScrollGuard
              </p>
              <p className="mt-4 max-w-[260px] text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                © 2024 ScrollGuard Inc. Designed for digital health.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
              {footerGroups.map((group) => (
                <div key={group.href}>
                  <Link
                    href={group.href}
                    className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8da0b2] transition hover:text-slate-900"
                  >
                    {group.title}
                  </Link>
                </div>
              ))}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
