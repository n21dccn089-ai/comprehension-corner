import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Practice from "./pages/Practice";
import Schedule from "./pages/Schedule";
import Forum from "./pages/Forum";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ExamManagement from "./pages/admin/ExamManagement";
import UserManagement from "./pages/admin/UserManagement";
import BlogManagement from "./pages/admin/BlogManagement";
import ReportManagement from "./pages/admin/ReportManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/exams" element={<ExamManagement />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/blogs" element={<BlogManagement />} />
          <Route path="/admin/reports" element={<ReportManagement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
