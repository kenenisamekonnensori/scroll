import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  BarChart2,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoutAdmin } from "@/app/login/actions";

export function DashboardSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen border-r border-gray-100 bg-[#fafafa] py-10 px-6 sticky top-0">
      <div className="mb-10 px-2">
        <h2 className="font-bold text-[#3D3A8A] text-lg">ScrollGuard Admin</h2>
        <p className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase mt-1">Global Controller</p>
      </div>
      
      <nav className="flex-1 space-y-2 mb-10">
        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 text-[#3D3A8A] bg-white rounded-xl shadow-sm font-semibold text-sm border border-gray-100">
          <LayoutDashboard size={18} className="text-[#3D3A8A]" />
          Dashboard
        </Link>
        <Link href="/stats" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-colors text-sm font-medium">
          <BarChart2 size={18} />
          Usage Stats
        </Link>
        <Link href="/rules" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-colors text-sm font-medium">
          <CheckCircle2 size={18} />
          Active Rules
        </Link>
        <Link href="/docs" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-colors text-sm font-medium">
          <BookOpen size={18} />
          Documentation
        </Link>
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-colors text-sm font-medium">
          <Settings size={18} />
          System Settings
        </Link>
      </nav>

      <div className="space-y-3">
        <Button className="w-full bg-[#3D3A8A] hover:bg-[#2D2A6A] text-white rounded-xl shadow-md flex items-center justify-center gap-2 py-6 text-sm font-semibold transition-all">
          <PlusCircle size={18} />
          New Restriction
        </Button>

        <form action={logoutAdmin}>
          <Button
            type="submit"
            variant="outline"
            className="w-full rounded-xl border-gray-200 bg-white py-6 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <LogOut size={18} />
            Log Out
          </Button>
        </form>
      </div>
    </aside>
  );
}
