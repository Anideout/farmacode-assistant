import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

const AppLayout = () => (
  <div className="min-h-screen bg-background flex flex-col max-w-lg mx-auto relative">
    <div className="flex-1 pb-20">
      <Outlet />
    </div>
    <BottomNav />
  </div>
);

export default AppLayout;
