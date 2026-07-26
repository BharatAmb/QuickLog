import { Bell, Search, Sun, ChevronDown } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-[74px] items-center justify-between border-b border-[#E7E4DE] bg-white px-7">
      
      {/* Search Bar - styled to match the template's input */}
      <div className="relative w-[280px]">
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A6A29A]"
          size={16}
          strokeWidth={2.5}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-[9px] border border-[#E7E4DE] bg-[#F7F6F2] py-2 pl-10 pr-4 text-[13px] text-[#181715] outline-none transition-all duration-200 focus:w-[310px] focus:border-[#E8A23D] focus:bg-white"
        />
      </div>

      {/* Right Side Icons & Profile */}
      <div className="flex items-center gap-4">
        
        {/* Action Icons */}
        <div className="flex gap-2">
          <button className="relative flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#F0EEE9] text-[#6E6B65] transition-colors hover:text-[#181715]">
            <Sun size={17} strokeWidth={2.2} />
          </button>

          <button className="relative flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#F0EEE9] text-[#6E6B65] transition-colors hover:text-[#181715]">
            <Bell size={17} strokeWidth={2.2} />
            {/* Notification Ping */}
            <span className="absolute right-2 top-1.5 h-2 w-2 rounded-full border-[1.5px] border-white bg-[#E8A23D]"></span>
          </button>
        </div>

        {/* User Chip */}
        <button className="flex items-center gap-2.5 rounded-xl p-1.5 pr-2 transition-colors hover:bg-[#F0EEE9]">
          
          <div className="relative flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#1C1B19] text-[12.5px] font-bold text-[#E8A23D]">
            SA
            {/* Active Status Dot */}
            <span className="absolute -bottom-[2px] -right-[2px] h-[10px] w-[10px] rounded-full border-2 border-white bg-[#1E8E5A]"></span>
          </div>

          <div className="text-left">
            <p className="text-[13px] font-bold leading-tight text-[#181715]">
              Super Admin
            </p>
            <p className="text-[10.5px] font-semibold tracking-wide text-[#A6A29A]">
              ADMIN
            </p>
          </div>

          <ChevronDown size={14} className="ml-1 text-[#A6A29A]" strokeWidth={2.5} />
        </button>

      </div>
    </header>
  );
}