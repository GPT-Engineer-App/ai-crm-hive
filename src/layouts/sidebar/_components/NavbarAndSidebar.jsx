import { Package2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../../nav-items";
import { SidebarNavLink } from "./SidebarNavLink";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const NavbarAndSidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>AI CRM</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          {navItems.map((item) => (
            <Tooltip key={item.to}>
              <TooltipTrigger asChild>
                <SidebarNavLink to={item.to}>
                  {item.icon}
                  {item.title}
                </SidebarNavLink>
              </TooltipTrigger>
              <TooltipContent side="right">
                {item.title}
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </div>
    </div>
  </div>
);