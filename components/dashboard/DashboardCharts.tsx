import { PlayCircle, LayoutList } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      
      {/* Usage Trends Chart */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="font-bold text-xl mb-1">Usage Trends</h3>
            <p className="text-gray-400 text-xs">Network-wide scroll activity vs. restrictions</p>
          </div>
          <div className="flex bg-gray-100 rounded-lg p-1 text-xs font-semibold text-gray-500">
            <button className="bg-white text-gray-900 border border-gray-200 shadow-sm px-4 py-1.5 rounded-md">Week</button>
            <button className="px-4 py-1.5 rounded-md hover:text-gray-900 transition-colors">Month</button>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-between gap-1 sm:gap-4 mt-12 mb-2 px-2 relative min-h-[220px]">
          {/* Subtle grid lines */}
          <div className="absolute inset-0 w-full flex flex-col justify-between hidden pointer-events-none opacity-20">
             <div className="border-b border-gray-200 w-full h-0"></div>
             <div className="border-b border-gray-200 w-full h-0"></div>
             <div className="border-b border-gray-200 w-full h-0"></div>
          </div>

          {/* Mon */}
          <div className="w-full flex justify-center group relative cursor-pointer">
            <div className="tooltip opacity-0 group-hover:opacity-100 absolute -top-8 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg transition-opacity pointer-events-none">650k acts</div>
            <div className="w-full max-w-[40px] bg-[#E8E9EF] group-hover:bg-[#D5D8E4] transition-colors rounded-sm h-32 relative"></div>
          </div>
          
          {/* Tue */}
          <div className="w-full flex justify-center group relative cursor-pointer">
            <div className="tooltip opacity-0 group-hover:opacity-100 absolute -top-8 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg transition-opacity pointer-events-none">420k acts</div>
            <div className="w-full max-w-[40px] bg-[#E8E9EF] group-hover:bg-[#D5D8E4] transition-colors rounded-sm h-20 relative"></div>
          </div>

          {/* Wed */}
          <div className="w-full flex justify-center group relative cursor-pointer">
            <div className="tooltip opacity-0 group-hover:opacity-100 absolute -top-8 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg transition-opacity pointer-events-none">810k acts</div>
            <div className="w-full max-w-[40px] bg-[#E8E9EF] group-hover:bg-[#D5D8E4] transition-colors rounded-sm h-40 relative"></div>
          </div>

          {/* Thu (Active/Highlight) */}
          <div className="w-full flex justify-center group relative cursor-pointer">
            <div className="tooltip opacity-0 group-hover:opacity-100 absolute -top-8 bg-[#3D3A8A] text-white text-[10px] shadow-lg px-2 py-1 rounded transition-opacity pointer-events-none font-bold">1.2m blocks</div>
            <div className="w-full max-w-[40px] bg-[#C4C1DD] border-t-2 border-[#3D3A8A] rounded-sm h-48 relative shadow-[0_-2px_10px_-2px_rgba(61,58,138,0.3)]"></div>
          </div>

          {/* Fri */}
          <div className="w-full flex justify-center group relative cursor-pointer">
            <div className="tooltip opacity-0 group-hover:opacity-100 absolute -top-8 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg transition-opacity pointer-events-none">620k acts</div>
            <div className="w-full max-w-[40px] bg-[#E8E9EF] group-hover:bg-[#D5D8E4] transition-colors rounded-sm h-32 relative"></div>
          </div>

          {/* Sat */}
          <div className="w-full flex justify-center group relative cursor-pointer">
            <div className="tooltip opacity-0 group-hover:opacity-100 absolute -top-8 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg transition-opacity pointer-events-none">350k acts</div>
            <div className="w-full max-w-[40px] bg-[#E8E9EF] group-hover:bg-[#D5D8E4] transition-colors rounded-sm h-16 relative"></div>
          </div>

          {/* Sun */}
          <div className="w-full flex justify-center group relative cursor-pointer">
            <div className="tooltip opacity-0 group-hover:opacity-100 absolute -top-8 bg-gray-900 text-white text-[10px] px-2 py-1 rounded shadow-lg transition-opacity pointer-events-none">750k acts</div>
            <div className="w-full max-w-[40px] bg-[#E8E9EF] group-hover:bg-[#D5D8E4] transition-colors rounded-sm h-36 relative"></div>
          </div>
        </div>

        <div className="flex justify-between px-2 text-[9px] font-bold text-gray-400 mt-4 tracking-widest px-4">
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span className="text-[#3D3A8A] border-b border-[#3D3A8A] pb-1">THU</span>
          <span>FRI</span>
          <span>SAT</span>
          <span>SUN</span>
        </div>
      </div>

      {/* Enforcement Peak Details */}
      <div className="lg:col-span-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
        <h3 className="font-bold text-xl mb-12 border-gray-900">Enforcement Peak</h3>
        
        <div className="space-y-8 flex-1 flex flex-col justify-center">
          
          {/* TikTok */}
          <div className="flex flex-col gap-3 group cursor-pointer relative">
            <div className="flex items-center gap-4 relative z-10 w-full">
              <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform flex-shrink-0">
                <PlayCircle size={20} className="fill-red-500 text-white" />
              </div>
              <div className="flex-1 w-full flex-col items-start min-w-0 pr-8">
                 <div className="flex justify-between w-full mb-1">
                   <span className="font-bold text-sm text-gray-900 truncate">TikTok</span>
                   <span className="text-xs text-gray-500 whitespace-nowrap hidden sm:inline">42% of total</span>
                 </div>
                 <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-red-500 h-full rounded-full" style={{width: '42%'}}></div>
                 </div>
              </div>
            </div>
          </div>

          {/* YouTube Reels */}
          <div className="flex flex-col gap-3 group cursor-pointer">
            <div className="flex items-center gap-4 w-full">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shrink-0">
                <LayoutList size={20} className="fill-blue-600 text-white" />
              </div>
              <div className="flex-1 flex-col items-start pr-8">
                 <div className="flex justify-between w-full mb-1">
                   <span className="font-bold text-sm text-gray-900 truncate">YouTube Reels</span>
                   <span className="text-xs text-gray-500 whitespace-nowrap hidden sm:inline">28% of total</span>
                 </div>
                 <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-blue-600 h-full rounded-full" style={{width: '28%'}}></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex flex-col gap-3 group cursor-pointer">
             <div className="flex items-center gap-4 w-full">
              <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform shrink-0">
                <FaInstagram size={20} />
              </div>
              <div className="flex-1 flex-col items-start pr-8">
                 <div className="flex justify-between w-full mb-1">
                   <span className="font-bold text-sm text-gray-900 truncate">Instagram</span>
                   <span className="text-xs text-gray-500 whitespace-nowrap hidden sm:inline">15% of total</span>
                 </div>
                 <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-pink-500 h-full rounded-full" style={{width: '15%'}}></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Twitter (X) */}
          <div className="flex flex-col gap-3 group cursor-pointer">
            <div className="flex items-center gap-4 w-full">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform shrink-0">
                <FaXTwitter size={20} className="fill-blue-500" />
              </div>
              <div className="flex-1 flex-col items-start pr-8">
                 <div className="flex justify-between w-full mb-1">
                   <span className="font-bold text-sm text-gray-900 truncate">Twitter (X)</span>
                   <span className="text-xs text-gray-500 whitespace-nowrap hidden sm:inline">8% of total</span>
                 </div>
                 <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-blue-500 h-full rounded-full" style={{width: '8%'}}></div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}