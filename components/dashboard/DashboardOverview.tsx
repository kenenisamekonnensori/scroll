import Image from "next/image";
import { Users, Zap, Ban, Clock } from "lucide-react";

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1 border-gray-900">Overview</h1>
          <p className="text-sm text-gray-500">Real-time usage and policy enforcement analytics.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#EEF2F6] px-3 py-1.5 rounded-full border border-[#D5E1ED]">
            <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></div>
            <span className="text-[10px] font-bold text-[#1A3B8C] tracking-wide uppercase">LIVE SYSTEM</span>
          </div>
          <div className="relative">
            <Image
              src="https://i.pravatar.cc/150?u=admin"
              className="w-9 h-9 rounded-xl shadow-sm border border-gray-200"
              alt="Admin"
              width={36}
              height={36}
            />
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-blue-100/50 p-2.5 rounded-lg text-blue-600">
              <Users size={20} />
            </div>
            <span className="text-xs font-semibold text-teal-600">+12.5%</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">Total Users</span>
          <h3 className="text-3xl font-extrabold text-gray-900">128.4k</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-purple-100/50 p-2.5 rounded-lg text-purple-500">
              <Zap size={20} className="fill-purple-500" />
            </div>
            <span className="text-xs font-semibold text-gray-900">+4.2%</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">Active Now</span>
          <h3 className="text-3xl font-extrabold text-gray-900">42,903</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-teal-100/50 p-2.5 rounded-lg text-teal-600">
              <Ban size={20} className="stroke-teal-600 fill-teal-100/20" />
            </div>
            <span className="text-xs font-semibold text-red-500">+890</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">Blocks Today</span>
          <h3 className="text-3xl font-extrabold text-gray-900">1.2m</h3>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-red-100/50 p-2.5 rounded-lg text-red-500">
              <Clock size={20} className="fill-red-500 text-white" />
            </div>
            <span className="text-xs font-semibold text-gray-900">-18m</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-1">Avg Screen Time</span>
          <h3 className="text-3xl font-extrabold text-gray-900">2h 14m</h3>
        </div>

      </div>
    </div>
  );
}