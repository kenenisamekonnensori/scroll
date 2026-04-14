import { Button } from "./ui/button";

export function Cta() {
  return (
    <section className="py-24 px-4 bg-gray-50 flex justify-center">
      <div className="bg-[#3D3A8A] w-full max-w-5xl rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden backdrop-blur-xl">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to focus?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join over 50,000 professionals who use ScrollGuard to reclaim 2+ hours of their day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto bg-white text-[#3D3A8A] hover:bg-gray-100 rounded-full px-8 font-semibold">
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 rounded-full px-8 bg-transparent">
              Android App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}