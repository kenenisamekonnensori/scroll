import Link from "next/link";
import { Button } from "./ui/button";

type NavbarProps = {
  active?: "features" | "download" | "docs" | "dashboard";
};

export function Navbar({ active }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#0b7f8c]"
          >
            ScrollGuard
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          <Link
            href="/#features"
            className={
              active === "features"
                ? "border-b border-cyan-600 pb-0.5 text-cyan-700"
                : "transition-colors hover:text-slate-900"
            }
          >
            Features
          </Link>
          <Link
            href="/download"
            className={
              active === "download"
                ? "border-b border-cyan-600 pb-0.5 text-cyan-700"
                : "transition-colors hover:text-slate-900"
            }
          >
            Download
          </Link>
          <Link
            href="/docs"
            className={
              active === "docs"
                ? "border-b border-cyan-600 pb-0.5 text-cyan-700"
                : "transition-colors hover:text-slate-900"
            }
          >
            Docs
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#0b7f8c] px-6 text-white hover:bg-[#086973]"
          >
            <Link href="/download">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
