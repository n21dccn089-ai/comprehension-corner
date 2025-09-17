import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  FileText, 
  Users, 
  MessageSquare, 
  Flag,
  BookOpen
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    {
      title: "Tổng quan",
      path: "/admin",
      icon: BarChart3
    },
    {
      title: "Quản lí đề thi",
      path: "/admin/exams",
      icon: FileText
    },
    {
      title: "Quản lí người dùng",
      path: "/admin/users",
      icon: Users
    },
    {
      title: "Quản lí blog",
      path: "/admin/blogs",
      icon: MessageSquare
    },
    {
      title: "Quản lí report forum",
      path: "/admin/reports",
      icon: Flag
    }
  ];

  return (
    <div className="w-64 min-h-screen bg-card border-r">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Admin Panel
          </span>
        </Link>
      </div>

      <nav className="px-4 pb-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-smooth group ${
                active
                  ? "bg-gradient-primary text-white shadow-soft"
                  : "text-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Icon className={`w-5 h-5 ${active ? "text-white" : "group-hover:text-primary"}`} />
              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminSidebar;