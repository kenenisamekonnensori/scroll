import { redirect } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { DashboardActivity } from "@/components/dashboard/DashboardActivity";
import { isAdminAuthenticated } from "@/lib/auth";

export default async function DashboardPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar active="dashboard" />
      <div className="flex w-full max-w-[1440px] mx-auto relative">
        <DashboardSidebar />
        <main className="flex-1 py-12 px-4 lg:px-12 w-full max-w-full overflow-hidden">
          <DashboardOverview />
          <DashboardCharts />
          <DashboardActivity />
        </main>
      </div>
      <Footer />
    </div>
  );
}
