import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Eye, Heart, Tag } from "lucide-react";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Mẹo Vàng Để Đạt Điểm Cao TOEIC Listening",
      excerpt: "Khám phá những phương pháp hiệu quả nhất để cải thiện kỹ năng nghe tiếng Anh và đạt điểm cao trong phần Listening của TOEIC.",
      author: "Nguyễn Minh Hoàng",
      publishDate: "2024-03-15",
      category: "TOEIC Tips",
      views: 2450,
      likes: 186,
      image: "/placeholder.svg",
      tags: ["TOEIC", "Listening", "Tips"]
    },
    {
      id: 2,
      title: "Cách Học Từ Vựng Tiếng Anh Hiệu Quả Cho Người Mới Bắt Đầu",
      excerpt: "Hướng dẫn chi tiết các phương pháp học từ vựng tiếng Anh phù hợp với người mới bắt đầu, giúp ghi nhớ lâu và ứng dụng tốt.",
      author: "Trần Thị Lan",
      publishDate: "2024-03-12",
      category: "Vocabulary",
      views: 1890,
      likes: 142,
      image: "/placeholder.svg",
      tags: ["Vocabulary", "Beginner", "Study Methods"]
    },
    {
      id: 3,
      title: "Grammar Cơ Bản: Thì Hiện Tại Đơn Và Ứng Dụng",
      excerpt: "Tìm hiểu về thì hiện tại đơn trong tiếng Anh, cách sử dụng, công thức và các ví dụ thực tế trong giao tiếp hàng ngày.",
      author: "Lê Văn Tuấn",
      publishDate: "2024-03-10",
      category: "Grammar",
      views: 3120,
      likes: 203,
      image: "/placeholder.svg",
      tags: ["Grammar", "Present Simple", "Basic"]
    },
    {
      id: 4,
      title: "Chiến Lược Làm Bài TOEIC Reading Trong 75 Phút",
      excerpt: "Hướng dẫn cách phân bổ thời gian và chiến lược làm bài hiệu quả để hoàn thành phần Reading TOEIC trong thời gian quy định.",
      author: "Phạm Thị Mai",
      publishDate: "2024-03-08",
      category: "TOEIC Tips",
      views: 2780,
      likes: 234,
      image: "/placeholder.svg",
      tags: ["TOEIC", "Reading", "Time Management"]
    }
  ];

  const categories = [
    { name: "TOEIC Tips", count: 25, color: "bg-blue-500" },
    { name: "Grammar", count: 18, color: "bg-green-500" },
    { name: "Vocabulary", count: 32, color: "bg-purple-500" },
    { name: "Speaking", count: 14, color: "bg-orange-500" },
    { name: "Listening", count: 20, color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Blog Học Tiếng Anh</h1>
          <p className="text-muted-foreground text-lg">
            Khám phá các bài viết hữu ích về học tiếng Anh, tips TOEIC và nhiều kiến thức bổ ích khác
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    
                    <CardTitle className="text-lg mb-3 line-clamp-2">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.publishDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Danh mục</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${category.color}`} />
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;