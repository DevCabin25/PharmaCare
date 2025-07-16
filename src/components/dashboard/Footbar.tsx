"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Package, User, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    href: "/dashboard/Inventory",
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    href: "/dashboard/reports",
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    href: "/dashboard/profile",
  },
];

export default function Footbar() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-slate-100 border-b border-slate-200">
      <nav className="flex">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center py-4 px-6 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sky-400 text-white"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <Icon className="w-5 h-5 mb-1" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
