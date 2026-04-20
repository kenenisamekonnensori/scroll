export function DashboardActivity() {
  const activities = [
    {
      id: 1,
      user_init: "JD",
      user_color: "bg-[#e1ddff] text-[#3D3A8A]",
      user_name: "john_doe_92",
      user_id: "ID: 48920",
      action: "Auto-Block (TikTok)",
      duration: "30m limit reached",
      timestamp: "2 mins ago",
      status: "BLOCKED",
      status_color: "bg-[#fdebea] text-[#ea4c4c]"
    },
    {
      id: 2,
      user_init: "AM",
      user_color: "bg-[#eed4ff] text-[#b333db]",
      user_name: "alice_m",
      user_id: "ID: 11029",
      action: "Zen Mode Triggered",
      duration: "Manual Activation",
      timestamp: "14 mins ago",
      status: "ACTIVE",
      status_color: "bg-[#0b5c5e] text-white font-semibold"
    },
    {
      id: 3,
      user_init: "SK",
      user_color: "bg-[#ccf7ff] text-[#0ea5b9]",
      user_name: "sam_knight",
      user_id: "ID: 88273",
      action: "Usage Limit Alert",
      duration: "80% of daily quota",
      timestamp: "45 mins ago",
      status: "WARNING",
      status_color: "bg-[#e9ecef] text-[#6b7280] font-semibold"
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mt-6 mb-24 overflow-x-auto">
      <div className="flex justify-between items-center mb-8 min-w-[800px]">
        <h2 className="text-xl font-bold">Recent Activity</h2>
        <button className="text-sm font-bold text-[#3D3A8A] hover:text-[#2D2A6A] transition-colors">
          View All Logs
        </button>
      </div>

      <table className="w-full text-left min-w-[800px]">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="pb-4 text-[10px] font-bold text-gray-400 tracking-wider uppercase pl-2 w-1/4">User</th>
            <th className="pb-4 text-[10px] font-bold text-gray-400 tracking-wider uppercase w-1/4">Action</th>
            <th className="pb-4 text-[10px] font-bold text-gray-400 tracking-wider uppercase w-1/4">Duration/Count</th>
            <th className="pb-4 text-[10px] font-bold text-gray-400 tracking-wider uppercase w-1/6">Timestamp</th>
            <th className="pb-4 text-[10px] font-bold text-gray-400 tracking-wider uppercase w-1/12">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {activities.map((log) => (
            <tr key={log.id} className="hover:bg-gray-50/50 transition-colors group">
              <td className="py-4 pl-2">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${log.user_color}`}>
                    {log.user_init}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{log.user_name}</h4>
                    <span className="text-[10px] text-gray-400 font-mono tracking-wide">{log.user_id}</span>
                  </div>
                </div>
              </td>
              <td className="py-4">
                <span className="font-semibold text-sm text-gray-900 group-hover:text-[#3D3A8A] transition-colors">
                  {log.action}
                </span>
              </td>
              <td className="py-4">
                <span className="text-sm text-gray-500">{log.duration}</span>
              </td>
              <td className="py-4">
                 <span className="text-sm text-gray-500">{log.timestamp}</span>
              </td>
              <td className="py-4 pr-2">
                 <span className={`text-[9px] px-2 py-1 rounded-[4px] font-bold uppercase tracking-widest inline-flex items-center justify-center min-w-[70px] ${log.status_color}`}>
                   {log.status}
                 </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}