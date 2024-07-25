import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Wallet, Activity, ArrowUpRight } from "lucide-react";

const DashboardCard = ({ title, value, icon: Icon, trend }) => (
  <Card className="hover:shadow-lg transition-all">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {trend && (
        <p className="text-xs text-muted-foreground mt-1">
          <span className="text-green-500 inline-flex items-center">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            {trend}
          </span>{" "}
          from last month
        </p>
      )}
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, John</h1>
        <p className="text-muted-foreground">Here's a summary of your CRM activity</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard title="Total Contacts" value="1,234" icon={Users} trend="12%" />
        <DashboardCard title="Total Deals" value="56" icon={Wallet} trend="8%" />
        <DashboardCard title="Recent Activities" value="28" icon={Activity} trend="5%" />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span className="flex-grow">New contact added: Jane Smith</span>
              <span className="text-muted-foreground text-sm">2 hours ago</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="flex-grow">Deal closed: Project X</span>
              <span className="text-muted-foreground text-sm">5 hours ago</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span className="flex-grow">Meeting scheduled with Bob Johnson</span>
              <span className="text-muted-foreground text-sm">Yesterday</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;