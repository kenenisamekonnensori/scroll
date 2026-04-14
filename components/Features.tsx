import { BarChart3, Clock, Ban } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Precision Focus Tools</h2>
        <p className="text-gray-500">Everything you need to master your digital environment.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:col-span-2">
          <div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-teal-600">
            <BarChart3 size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">Track Usage</h3>
          <p className="text-gray-500 mb-8 max-w-md">
            Gain deep insights into your scrolling behavior with granular app-by-app analytics and weekly reports.
          </p>
          <div className="mt-auto bg-gray-100 rounded-xl h-48 w-full border-b-4 border-green-300 relative overflow-hidden">
            {/* Placeholder for chart image/UI */}
            <div className="absolute bottom-0 left-8 w-8 h-16 bg-green-300 rounded-t-sm"></div>
            <div className="absolute bottom-0 left-24 w-8 h-32 bg-green-300 rounded-t-sm"></div>
            <div className="absolute bottom-0 left-40 w-8 h-40 bg-green-300 rounded-t-sm"></div>
            <div className="absolute bottom-0 left-56 w-8 h-24 bg-green-300 rounded-t-sm"></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
          <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-purple-600">
            <Clock size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">Set Limits</h3>
          <p className="text-gray-500 mb-8">
            Define soft reminders or hard lockouts for categories that drain your productivity the most.
          </p>
          <div className="mt-auto flex items-center text-sm font-semibold text-[#3D3A8A] hover:text-[#2D2A6A] cursor-pointer">
            Explore Limits →
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
          <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-red-600">
            <Ban size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">Block Distractions</h3>
          <p className="text-gray-500">
            Intelligent distraction blocking that activates automatically when you enter your designated deep work hours.
          </p>
        </div>

        {/* Card 4 (Zen Toggle Banner inside grid) */}
        <div className="bg-gradient-to-br from-[#4d48b1] to-[#3D3A8A] p-8 rounded-3xl shadow-sm md:col-span-2 text-white flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-3">The Zen Toggle</h3>
          <p className="text-purple-200 mb-8 max-w-md">
            One switch to silence all non-essential notifications and lock distracting domains instantly.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-6 bg-purple-400 rounded-full p-1 flex items-center shadow-inner">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-sm font-semibold tracking-wider text-purple-200">FOCUS MODE ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}