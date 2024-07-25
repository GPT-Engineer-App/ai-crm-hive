import { BarChart3, Contact2, Home, Settings, Wallet } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contacts";
import Deals from "./pages/Deals";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Contacts",
    to: "/contacts",
    icon: <Contact2 className="h-4 w-4" />,
    page: <Contacts />,
  },
  {
    title: "Deals",
    to: "/deals",
    icon: <Wallet className="h-4 w-4" />,
    page: <Deals />,
  },
  {
    title: "Reports",
    to: "/reports",
    icon: <BarChart3 className="h-4 w-4" />,
    page: <Reports />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <Settings />,
  },
];