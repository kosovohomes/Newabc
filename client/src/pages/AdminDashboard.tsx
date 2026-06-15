import { useState } from "react";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Menu, X } from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useLocation } from "wouter";
import AdminContentCards from "./AdminSections/AdminContentCards";
import AdminNavButtons from "./AdminSections/AdminNavButtons";
import AdminUsers from "./AdminSections/AdminUsers";
import AdminStats from "./AdminSections/AdminStats";
import AdminActivityLogs from "./AdminSections/AdminActivityLogs";

export default function AdminDashboard() {
  const { currentUser } = useAdmin();
  const [, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLocation("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-teal-700 text-white transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div className="p-6 border-b border-teal-600">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-sm text-teal-200 mt-1">{currentUser?.email}</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavItem icon="📊" label="Dashboard" href="#dashboard" />
          <NavItem icon="📝" label="Content Cards" href="#content" />
          <NavItem icon="🔗" label="Nav Buttons" href="#nav" />
          <NavItem icon="👥" label="Users" href="#users" />
          <NavItem icon="📈" label="Statistics" href="#stats" />
          <NavItem icon="📋" label="Activity Logs" href="#logs" />
        </nav>

        <div className="p-4 border-t border-teal-600">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full text-teal-700 border-teal-300 hover:bg-teal-50"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
          <div className="w-10" />
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="nav">Nav Buttons</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="logs">Logs</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              <AdminStats />
            </TabsContent>

            <TabsContent value="content">
              <AdminContentCards />
            </TabsContent>

            <TabsContent value="nav">
              <AdminNavButtons />
            </TabsContent>

            <TabsContent value="users">
              <AdminUsers />
            </TabsContent>

            <TabsContent value="stats">
              <AdminStats />
            </TabsContent>

            <TabsContent value="logs">
              <AdminActivityLogs />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, href }: { icon: string; label: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-teal-600 transition-colors cursor-pointer"
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
}
