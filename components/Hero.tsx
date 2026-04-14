import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-tight bg-purple-100 text-purple-700 mb-8">
        DIGITAL HEALTH REDEFINED
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
        Take control of your <br className="hidden md:block" />
        <span className="text-[#3D3A8A]">screen time</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
        Reclaim your focus with an intelligent assistant that helps you break the infinite scroll cycle and build healthier digital habits.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <Button size="lg" className="w-full sm:w-auto bg-[#3D3A8A] hover:bg-[#2D2A6A] rounded-full px-8 text-base">
          Download App
        </Button>
        <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-full px-8 text-base bg-gray-100/80 hover:bg-gray-200">
          View Documentation
        </Button>
      </div>

      <div className="relative mx-auto rounded-[2rem] border-[12px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl">
        <img 
          src="https://placehold.co/1200x675/1a1a1a/ffffff?text=App+Dashboard+Screenshot" 
          alt="ScrollGuard Dashboard" 
          className="w-full h-auto rounded-xl"
        />
      </div>
    </section>
  );
}