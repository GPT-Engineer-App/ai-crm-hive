import { Outlet } from "react-router-dom";
import { MobileSidebar } from "./_components/MobileSidebar";
import { NavbarAndSidebar } from "./_components/NavbarAndSidebar";
import { UserMenu } from "./_components/UserMenu";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] font-inter">
      <NavbarAndSidebar />
      <div className="flex flex-col">
        <header className="flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
          <MobileSidebar />
          <div className="w-full flex-1 flex justify-end">
            <UserMenu />
          </div>
        </header>
        <main className="flex-grow p-6 overflow-auto bg-gray-50">
          <Outlet />
        </main>
        <footer className="border-t py-4 text-center text-sm text-muted-foreground bg-white">
          © 2023 AI CRM. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Layout;