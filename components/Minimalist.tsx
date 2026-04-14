import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Minimalist() {
  return (
    <section className="py-24 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold mb-4">Minimalist by design</h2>
          <p className="text-gray-500">A non-intrusive interface that stays out of your way.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-white">
            <ChevronLeft size={16} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-white">
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 snap-x max-w-6xl mx-auto px-4 md:px-0 scrollbar-hide">
        {/* Screen 1 */}
        <div className="min-w-[280px] sm:min-w-[320px] bg-white p-4 rounded-3xl shadow-xl flex-shrink-0 snap-center border border-gray-100">
          <div className="bg-[#1A3B8C] h-[600px] rounded-2xl p-6 flex flex-col items-center justify-start text-white">
            <div className="w-32 h-32 border-[6px] border-white rounded-full flex items-center justify-center mt-12 mb-4">
              <span className="text-4xl font-bold">659</span>
            </div>
            <div className="text-xs uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4">Focus</div>
            <h3 className="text-2xl font-bold mb-2">Safe on work</h3>
            <p className="text-center text-blue-100 text-sm">659 min deep work, safe, works, work</p>
          </div>
          <p className="text-center text-xs font-bold text-gray-400 mt-4 tracking-wider">SPLASH VIEW</p>
        </div>

        {/* Screen 2 */}
        <div className="min-w-[280px] sm:min-w-[320px] bg-white p-4 rounded-3xl shadow-xl flex-shrink-0 snap-center border border-gray-100">
          <div className="bg-gray-50 h-[600px] rounded-2xl border border-gray-200">
            {/* Simplified wireframe representation */}
            <div className="h-full flex flex-col p-4">
               <div className="bg-purple-100 h-24 rounded-xl mb-4"></div>
               <div className="flex gap-2 mb-4">
                 <div className="bg-white shadow h-32 flex-1 rounded-xl"></div>
                 <div className="bg-white shadow h-32 w-1/3 rounded-xl"></div>
               </div>
            </div>
          </div>
          <p className="text-center text-xs font-bold text-gray-400 mt-4 tracking-wider">DASHBOARD</p>
        </div>

        {/* Screen 3 */}
        <div className="min-w-[280px] sm:min-w-[320px] bg-white p-4 rounded-3xl shadow-xl flex-shrink-0 snap-center border border-gray-100">
          <div className="bg-gray-50 h-[600px] rounded-2xl border border-gray-200 relative overflow-hidden">
             {/* Settings mock */}
             <div className="p-4 space-y-4">
               <div className="h-8 bg-gray-200 w-1/2 rounded mb-6"></div>
               <div className="h-12 bg-white shadow-sm rounded"></div>
               <div className="h-12 bg-white shadow-sm rounded"></div>
               <div className="h-12 bg-white shadow-sm rounded"></div>
               <div className="h-12 bg-white shadow-sm rounded"></div>
             </div>
          </div>
          <p className="text-center text-xs font-bold text-gray-400 mt-4 tracking-wider">SETTINGS</p>
        </div>

        {/* Screen 4 */}
        <div className="min-w-[280px] sm:min-w-[320px] bg-gray-900 p-4 rounded-3xl shadow-xl flex-shrink-0 snap-center object-cover">
          <div className="h-[600px] rounded-2xl bg-[#0a1122] flex items-center justify-center border border-gray-800">
            <div className="text-blue-500 opacity-50 p-8 text-center text-xs space-y-2 font-mono">
              <p>{"{"}</p>
              <p className="pl-4">&quot;rules&quot;: [</p>
              <p className="pl-8">&quot;block_all&quot;: true,</p>
              <p className="pl-8">&quot;time&quot;: &quot;09:00&quot;</p>
              <p className="pl-4">]</p>
              <p>{"}"}</p>
            </div>
          </div>
          <p className="text-center text-xs font-bold text-gray-500 mt-4 tracking-wider">RULE ENGINE</p>
        </div>
      </div>
    </section>
  );
}