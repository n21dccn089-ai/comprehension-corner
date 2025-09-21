import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Eye, Heart, Tag, ChevronLeft, Share2 } from "lucide-react";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { id } = useParams();

  const blogPost = {
    id: 1,
    title: "10 Mẹo Vàng Để Đạt Điểm Cao TOEIC Listening",
    content: `
      <h2>Giới thiệu</h2>
      <p>Phần Listening trong bài thi TOEIC chiếm một vai trò quan trọng và thường là nơi nhiều thí sinh gặp khó khăn. Tuy nhiên, với những mẹo và phương pháp đúng đắn, bạn hoàn toàn có thể cải thiện đáng kể điểm số của mình.</p>

      <h2>1. Làm quen với các loại câu hỏi</h2>
      <p>TOEIC Listening gồm 4 phần chính:</p>
      <ul>
        <li>Part 1: Photographs (Mô tả tranh)</li>
        <li>Part 2: Question-Response (Hỏi-đáp)</li>
        <li>Part 3: Conversations (Hội thoại)</li>
        <li>Part 4: Talks (Bài nói chuyện)</li>
      </ul>

      <h2>2. Tập trung vào từ khóa</h2>
      <p>Khi nghe, hãy chú ý đến những từ khóa quan trọng như:</p>
      <ul>
        <li>Wh-questions (What, When, Where, Who, Why, How)</li>
        <li>Số liệu, thời gian, địa điểm</li>
        <li>Tên riêng của người, công ty, sản phẩm</li>
      </ul>

      <h2>3. Đọc câu hỏi trước khi nghe</h2>
      <p>Trong Part 3 và Part 4, hãy tận dụng thời gian nghỉ để đọc trước câu hỏi. Điều này giúp bạn biết cần tập trung vào thông tin nào khi nghe.</p>

      <h2>4. Luyện tập hàng ngày</h2>
      <p>Để cải thiện khả năng nghe, bạn nên:</p>
      <ul>
        <li>Nghe podcast tiếng Anh mỗi ngày</li>
        <li>Xem phim, video có phụ đề</li>
        <li>Luyện tập với các đề thi thật</li>
        <li>Ghi chép từ vựng mới gặp phải</li>
      </ul>

      <h2>5. Kiểm soát thời gian</h2>
      <p>Đừng dành quá nhiều thời gian cho một câu hỏi. Nếu không chắc chắn, hãy đánh dấu và tiếp tục, sau đó quay lại nếu còn thời gian.</p>

      <h2>Kết luận</h2>
      <p>Việc đạt điểm cao trong TOEIC Listening đòi hỏi sự kiên trì và phương pháp học tập đúng đắn. Hãy áp dụng những mẹo trên và luyện tập thường xuyên để đạt được kết quả mong muốn.</p>
    `,
    author: "Nguyễn Minh Hoàng",
    publishDate: "2024-03-15",
    category: "TOEIC Tips",
    views: 2450,
    likes: 186,
    image: "/placeholder.svg",
    tags: ["TOEIC", "Listening", "Tips"],
    readTime: "8 phút đọc"
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Chiến Lược Làm Bài TOEIC Reading Trong 75 Phút",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Cách Học Từ Vựng Tiếng Anh Hiệu Quả",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/blog">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Quay lại Blog
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article>
              {/* Hero Image */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
                <img 
                  src={blogPost.image} 
                  alt={blogPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{blogPost.category}</Badge>
                  <span className="text-muted-foreground text-sm">{blogPost.readTime}</span>
                </div>
                
                <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blogPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPost.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{blogPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{blogPost.likes}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Chia sẻ
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </header>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-4 mt-8 pt-8 border-t">
                <Button variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  Thích bài viết
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Chia sẻ
                </Button>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Bài viết liên quan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <Link 
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="w-16 h-16 bg-muted rounded overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-3">
                            {post.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
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

export default BlogDetail;