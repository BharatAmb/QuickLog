import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  FolderKanban,
  FileText,
  Bell,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/super-admin/dashboard" },
  { name: "Companies", icon: Building2, path: "/super-admin/companies" },
  { name: "Employees", icon: Users, path: "/super-admin/employees" },
  { name: "Projects", icon: FolderKanban, path: "/super-admin/projects" },
  { name: "Reports", icon: FileText, path: "/super-admin/reports" },
  { name: "Notifications", icon: Bell, path: "/super-admin/notifications" },
  { name: "Settings", icon: Settings, path: "/super-admin/settings" },
];

export default function AppSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[200px] flex-col bg-[#333230] px-3.5 py-5 text-[#CBC8C2]">
      {/* Brand Logo Area */}
      <div className="mb-4 flex items-center gap-2.5 px-2 pb-2">
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-[#F0B75B] to-[#D4872A] text-[14px] font-extrabold text-[#1C1B19]">
          Q
        </div>
        <span className="text-[16.5px] font-extrabold tracking-tight text-white">
          QuickLog
        </span>
      </div>

      <div className="mb-2 px-2.5 text-[10.5px] font-bold uppercase tracking-[0.09em] text-[#D4872A]">
        ----Workplace----
      </div>

      <nav className="flex flex-col space-y-0.5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-semibold transition-colors duration-150
                ${
                  isActive
                    ? "bg-[#2A2825] text-white"
                    : "text-[#e5e3df] hover:bg-[#2A2825] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={17}
                    strokeWidth={2.2}
                    className={isActive ? "text-[#E8A23D]" : ""}
                  />
                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Optional: Bottom Storage/Info widget from the design */}
      <div className="mt-auto border-t border-[#33312D] px-2 pt-4">
        <div className="mb-2 text-[11.5px] text-[#A6A29A]">
          System Status — Optimal
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#2A2825]">
            <div className="h-full w-[38%] rounded-full bg-[#E8A23D]"></div>
          </div>
        </div>
      </div>
    </aside>
  );
}