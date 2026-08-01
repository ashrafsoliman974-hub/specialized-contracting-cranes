import { LayoutDashboard, Truck, Wallet, Users, Warehouse, FileText, Settings } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: 'لوحة التحكم', href: '#' },
    { icon: Truck, label: 'الأسطول', href: '#' },
    { icon: Wallet, label: 'المالية', href: '#' },
    { icon: Warehouse, label: 'المخازن', href: '#' },
    { icon: Users, label: 'الموارد البشرية', href: '#' },
    { icon: FileText, label: 'العقود', href: '#' },
    { icon: Settings, label: 'الإعدادات', href: '#' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen p-4 flex flex-col">
      <div className="mb-8 p-4 border-b border-slate-700">
        <h1 className="text-xl font-bold">كرينز ERP</h1>
      </div>
      <nav className="flex-1 space-y-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <item.icon size={20} />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
