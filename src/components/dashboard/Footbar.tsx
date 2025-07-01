import { BarChart3, Package, User, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    active: false,
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    active: false,
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    active: false,
  },
]

export default function Footbar() {
  return (
    <div className="w-full  bg-slate-100 border-b border-slate-200">
      <nav className="flex">
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className={cn(
                "flex-1 flex flex-col items-center justify-center py-4 px-6 text-sm font-medium transition-colors",
                item.active ? "bg-blue-500 text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
              )}
            >
              <Icon className="w-5 h-5 mb-1" />
              {item.label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}