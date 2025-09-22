import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import Header from "@/components/layout/Header";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState({
    display_name: "",
    bio: "",
    avatar_url: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
      await fetchProfile(session.user.id);
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!session) {
          navigate("/auth");
          return;
        }
        setUser(session.user);
        await fetchProfile(session.user.id);
      }
    );

    getSession();

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error && error.code !== "PGRST116") {
        throw error;
      }

      if (data) {
        setProfile({
          display_name: data.display_name || "",
          bio: data.bio || "",
          avatar_url: data.avatar_url || "",
        });
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    setError("");

    try {
      const { error } = await supabase
        .from("profiles")
        .upsert({
          id: user.id,
          display_name: profile.display_name,
          bio: profile.bio,
          avatar_url: profile.avatar_url,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast({
        title: "Cập nhật thông tin thành công!",
        description: "Thông tin cá nhân của bạn đã được lưu.",
      });
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (!user) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profile.avatar_url} alt={profile.display_name} />
                  <AvatarFallback className="text-xl">
                    {profile.display_name ? getInitials(profile.display_name) : "U"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-2xl">Thông tin cá nhân</CardTitle>
              <CardDescription>
                Cập nhật thông tin và cài đặt tài khoản của bạn
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {error && (
                <Alert className="border-destructive">
                  <AlertDescription className="text-destructive">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={user.email || ""}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-sm text-muted-foreground">
                    Email không thể thay đổi
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="display_name">Tên hiển thị</Label>
                  <Input
                    id="display_name"
                    type="text"
                    value={profile.display_name}
                    onChange={(e) =>
                      setProfile({ ...profile, display_name: e.target.value })
                    }
                    placeholder="Nhập tên hiển thị"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Giới thiệu</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                    placeholder="Viết một chút về bản thân..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avatar_url">URL Avatar</Label>
                  <Input
                    id="avatar_url"
                    type="url"
                    value={profile.avatar_url}
                    onChange={(e) =>
                      setProfile({ ...profile, avatar_url: e.target.value })
                    }
                    placeholder="https://example.com/your-avatar.jpg"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" disabled={isLoading} className="flex-1">
                    {isLoading ? "Đang lưu..." : "Lưu thay đổi"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSignOut}
                    className="flex-1"
                  >
                    Đăng xuất
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;