import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted"
      )
    }
  >
    {children}
  </NavLink>
);