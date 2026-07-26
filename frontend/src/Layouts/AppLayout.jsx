import { Outlet } from "react-router-dom";

import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex bg-[#F7F6F2]">
      <AppSidebar />
      <Backdrop />
      <div className="flex-1 flex flex-col ml-50">
        <AppHeader />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}