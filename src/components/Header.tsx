import { Bell, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 p-4 flex justify-between items-center">
      <div className="flex items-center gap-4 border border-slate-300 rounded-lg px-3 py-2 w-96">
        <Search className="text-slate-400" size={20} />
        <input
          type="text"
          placeholder="بحث..."
          className="bg-transparent border-none outline-none w-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:text-slate-900">
          <Bell size={24} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
            <User size={20} className="text-slate-600" />
          </div>
          <span className="font-medium text-slate-700">أشرف سليمان</span>
        </div>
      </div>
    </header>
  );
}
