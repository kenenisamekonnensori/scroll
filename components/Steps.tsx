export function Steps() {
  return (
    <section className="bg-gray-50 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Three steps to clarity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold text-[#3D3A8A] mb-6">
              01
            </div>
            <h3 className="text-xl font-bold mb-4">Sync Devices</h3>
            <p className="text-gray-500">
              Connect your phone, tablet, and desktop for a unified view of your digital footprint.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold text-[#3D3A8A] mb-6">
              02
            </div>
            <h3 className="text-xl font-bold mb-4">Audit Habits</h3>
            <p className="text-gray-500">
              Let ScrollGuard analyze which apps are serving you and which are stealing your time.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold text-[#3D3A8A] mb-6">
              03
            </div>
            <h3 className="text-xl font-bold mb-4">Automate Focus</h3>
            <p className="text-gray-500">
              Enable smart schedules that adapt to your workflow and protect your mental space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}