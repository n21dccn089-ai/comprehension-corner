import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, BookOpen, Calendar, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EnglishPro
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/practice"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth ${
                isActive("/practice")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Luyện tập</span>
            </Link>
            
            <Link
              to="/schedule"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth ${
                isActive("/schedule")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Lịch học</span>
            </Link>
            
            <Link
              to="/forum"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth ${
                isActive("/forum")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forum</span>
            </Link>
            
            <Link
              to="/blog"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth ${
                isActive("/blog")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Link>
            
            <Link
              to="/courses"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth ${
                isActive("/courses")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Khóa học</span>
            </Link>
          </nav>

          {/* Search & User */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Tìm kiếm..."
                className="pl-10 w-64 bg-muted/50"
              />
            </div>
            
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;