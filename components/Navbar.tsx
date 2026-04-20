import Link from "next/link";
import { Button } from "./ui/button";

type NavbarProps = {
  active?: "features" | "download" | "docs" | "dashboard";
};

export function Navbar({ active }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl tracking-tight">
            ScrollGuard
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/#features" className={active === "features" ? "text-[#3D3A8A] border-b border-[#3D3A8A] pb-0.5" : "hover:text-black transition-colors"}>Features</Link>
          <Link href="/download" className={active === "download" ? "text-[#3D3A8A] border-b border-[#3D3A8A] pb-0.5" : "hover:text-black transition-colors"}>Download</Link>
          <Link href="/docs" className={active === "docs" ? "text-[#3D3A8A] border-b border-[#3D3A8A] pb-0.5" : "hover:text-black transition-colors"}>Docs</Link>
          <Link href="/dashboard" className={active === "dashboard" ? "text-[#3D3A8A] border-b border-[#3D3A8A] pb-0.5" : "hover:text-black transition-colors"}>Dashboard</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="bg-[#3D3A8A] hover:bg-[#2D2A6A] text-white rounded-full px-6">
            <Link href="/download">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
