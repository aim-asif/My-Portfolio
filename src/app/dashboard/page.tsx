"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Edit, 
  Trash2, 
  LogOut,
  FileText,
  Image as ImageIcon,
  Video,
  Building2,
  Upload,
  Globe,
  EyeOff,
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  FolderOpen,
  PenTool,
  MessageSquare,
  Home
} from "lucide-react";
import Image from "next/image";

type Content = {
  id: number;
  title: string;
  content: string;
  company: string;
  client: string;
  category: string;
  mediaType: string;
  mediaUrl: string;
  tags: string[];
  status: string;
  date: string;
  views: number;
  likes: number;
};

const DashboardPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState<Content[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingContent, setEditingContent] = useState<Content | null>(null);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Simple authentication (in production, use proper auth)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      localStorage.setItem("dashboardAuth", "true");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("dashboardAuth");
  };

  useEffect(() => {
    const auth = localStorage.getItem("dashboardAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    
    // Load contents from localStorage (in production, use API)
    const savedContents = localStorage.getItem("dashboardContents");
    if (savedContents) {
      setContents(JSON.parse(savedContents));
    }
  }, []);

  const saveContents = (newContents: Content[]) => {
    setContents(newContents);
    localStorage.setItem("dashboardContents", JSON.stringify(newContents));
  };

  const addContent = (contentData: Omit<Content, 'id' | 'date' | 'views' | 'likes'>) => {
    const newContent: Content = {
      id: Date.now(),
      ...contentData,
      date: new Date().toISOString().split('T')[0],
      views: 0,
      likes: 0,
      status: contentData.status || 'draft',
    };
    const updatedContents = [...contents, newContent];
    saveContents(updatedContents);
    setShowAddForm(false);
  };

  const updateContent = (contentData: Content) => {
    const updatedContents = contents.map((c: Content) => 
      c.id === editingContent?.id ? { ...c, ...contentData } : c
    );
    saveContents(updatedContents);
    setEditingContent(null);
    setShowAddForm(false);
  };

  const deleteContent = (id: number) => {
    if (confirm("Are you sure you want to delete this content?")) {
      const updatedContents = contents.filter((content: Content) => content.id !== id);
      saveContents(updatedContents);
    }
  };

  const togglePublishStatus = (id: number) => {
    const updatedContents = contents.map((content: Content) => 
      content.id === id 
        ? { ...content, status: content.status === 'published' ? 'draft' : 'published' }
        : content
    );
    saveContents(updatedContents);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Dashboard Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
              <p>Demo Credentials:</p>
              <p>Username: admin</p>
              <p>Password: admin123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const publishedContents = contents.filter((c: Content) => c.status === 'published');
  const draftContents = contents.filter((c: Content) => c.status === 'draft');

  const sidebarMenus = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "contents", label: "My Contents", icon: FileText },
    { id: "portfolio", label: "Portfolio", icon: FolderOpen },
    { id: "case-studies", label: "Case Studies", icon: PenTool },
    { id: "blogs", label: "Blogs", icon: MessageSquare },
    { id: "about", label: "About Me", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <DashboardContent publishedContents={publishedContents} draftContents={draftContents} contents={contents} />;
      case "contents":
        return (
          <ContentsManagement 
            publishedContents={publishedContents}
            draftContents={draftContents}
            onEdit={(content) => {
              setEditingContent(content);
              setShowAddForm(true);
            }}
            onDelete={deleteContent}
            onToggleStatus={togglePublishStatus}
            onAddNew={() => setShowAddForm(true)}
          />
        );
      default:
        return <ComingSoon menu={activeMenu} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
        <div className="flex justify-between items-center px-4 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Dashboard
            </h1>
            <Button variant="outline" size="sm" onClick={() => router.push('/')}>
              <Home className="h-4 w-4 mr-2" />
              View Website
            </Button>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 min-h-screen">
          <div className="p-4">
            <nav className="space-y-2">
              {sidebarMenus.map((menu) => {
                const Icon = menu.icon;
                return (
                  <button
                    key={menu.id}
                    onClick={() => setActiveMenu(menu.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeMenu === menu.id
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{menu.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}

          {/* Add/Edit Form */}
          {showAddForm && (
            <ContentForm
              content={editingContent}
              onSubmit={(data: Content) => {
                if (editingContent) {
                  updateContent(data);
                } else {
                  addContent(data);
                }
              }}
              onCancel={() => {
                setShowAddForm(false);
                setEditingContent(null);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Dashboard Content Component
const DashboardContent = ({ publishedContents, draftContents, contents }: { publishedContents: Content[]; draftContents: Content[]; contents: Content[] }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Dashboard Overview</h2>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <FileText className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Contents</p>
                <p className="text-2xl font-bold">{contents.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Globe className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Published</p>
                <p className="text-2xl font-bold">{publishedContents.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <EyeOff className="h-8 w-8 text-orange-500" />
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Drafts</p>
                <p className="text-2xl font-bold">{draftContents.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Building2 className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Companies</p>
                <p className="text-2xl font-bold">
                  {new Set(contents.map((c: Content) => c.company)).size}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Published Content</CardTitle>
          </CardHeader>
          <CardContent>
            {publishedContents.slice(0, 5).length > 0 ? (
              <div className="space-y-3">
                {publishedContents.slice(0, 5).map((content: Content) => (
                  <div key={content.id} className="flex items-center space-x-3 p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      {content.mediaType === 'video' ? (
                        <Video className="h-5 w-5 text-white" />
                      ) : (
                        <ImageIcon className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{content.title}</p>
                      <p className="text-xs text-neutral-500">{content.company}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {content.category}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-neutral-500 text-center py-4">No published content yet</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Add New Content
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                View All Contents
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Contents Management Component
const ContentsManagement = ({ publishedContents, draftContents, onEdit, onDelete, onToggleStatus, onAddNew }: {
  publishedContents: Content[];
  draftContents: Content[];
  onEdit: (content: Content) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
  onAddNew: () => void;
}) => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">My Contents</h2>
        <Button onClick={onAddNew} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add New Content</span>
        </Button>
      </div>

      {/* Published Contents */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white flex items-center space-x-2">
          <Globe className="h-5 w-5 text-green-500" />
          <span>Published Contents</span>
        </h3>
        {publishedContents.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-neutral-600 dark:text-neutral-400">
                No published contents yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {publishedContents.map((content: Content) => (
              <ContentCard 
                key={content.id} 
                content={content} 
                onEdit={() => onEdit(content)}
                onDelete={() => onDelete(content.id)}
                onToggleStatus={() => onToggleStatus(content.id)}
                isPublished={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* Draft Contents */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white flex items-center space-x-2">
          <EyeOff className="h-5 w-5 text-orange-500" />
          <span>Draft Contents</span>
        </h3>
        {draftContents.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-neutral-600 dark:text-neutral-400">
                No draft contents yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {draftContents.map((content: Content) => (
              <ContentCard 
                key={content.id} 
                content={content} 
                onEdit={() => onEdit(content)}
                onDelete={() => onDelete(content.id)}
                onToggleStatus={() => onToggleStatus(content.id)}
                isPublished={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Coming Soon Component
const ComingSoon = ({ menu }: { menu: string }) => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          {menu.charAt(0).toUpperCase() + menu.slice(1)} Management
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          This feature is coming soon. Stay tuned!
        </p>
      </div>
    </div>
  );
};

// Content Card Component
const ContentCard = ({ content, onEdit, onDelete, onToggleStatus, isPublished }: {
  content: Content;
  onEdit: (content: Content) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
  isPublished: boolean;
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              {content.mediaType === 'video' ? (
                <Video className="h-8 w-8 text-white" />
              ) : (
                <ImageIcon className="h-8 w-8 text-white" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {content.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {content.company} • {content.client}
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  {content.category}
                </Badge>
                <Badge variant={isPublished ? "default" : "secondary"} className="text-xs">
                  {isPublished ? "Published" : "Draft"}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onToggleStatus(content.id)}
            >
              {isPublished ? <EyeOff className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(content)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(content.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Content Form Component
const ContentForm = ({ content, onSubmit, onCancel }: {
  content: Content | null;
  onSubmit: (data: Content) => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState({
    title: content?.title || "",
    content: content?.content || "",
    company: content?.company || "",
    client: content?.client || "",
    category: content?.category || "awareness",
    mediaType: content?.mediaType || "image",
    mediaUrl: content?.mediaUrl || "",
    tags: content?.tags?.join(", ") || "",
    status: content?.status || "draft"
  });

  const [mediaPreview, setMediaPreview] = useState(content?.mediaUrl || "");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMediaPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: content?.id || Date.now(),
      date: content?.date || new Date().toISOString().split('T')[0],
      views: content?.views || 0,
      likes: content?.likes || 0,
      ...formData,
      mediaUrl: mediaPreview,
      tags: formData.tags.split(",").map((tag: string) => tag.trim()).filter(Boolean),
    });
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{content ? "Edit Content" : "Add New Content"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title (Bengali)</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter title in Bengali"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Enter company name"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Client/Department</label>
              <Input
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="Enter client or department"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tags</label>
              <Input
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="Enter tags separated by commas"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                required
              >
                <option value="awareness">Awareness</option>
                <option value="sales">Sales</option>
                <option value="story">Story</option>
                <option value="promotion">Promotion</option>
                <option value="educational">Educational</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Media Type</label>
              <select
                value={formData.mediaType}
                onChange={(e) => setFormData({ ...formData, mediaType: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                required
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
          </div>

          {/* Media Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Upload Media</label>
            <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-neutral-400 mx-auto mb-2" />
              <input
                type="file"
                accept={formData.mediaType === 'video' ? 'video/*' : 'image/*'}
                onChange={handleFileChange}
                className="hidden"
                id="media-upload"
              />
              <label htmlFor="media-upload" className="cursor-pointer">
                <span className="text-blue-600 hover:text-blue-500 font-medium">
                  Click to upload
                </span>
                <span className="text-neutral-500"> or drag and drop</span>
              </label>
              <p className="text-xs text-neutral-500 mt-1">
                {formData.mediaType === 'video' ? 'MP4, WebM up to 10MB' : 'PNG, JPG, GIF up to 5MB'}
              </p>
            </div>
            {mediaPreview && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Preview:</p>
                {formData.mediaType === 'video' ? (
                  <video 
                    src={mediaPreview} 
                    controls 
                    className="max-w-xs rounded-lg"
                  />
                ) : (
                  <Image 
                    src={mediaPreview} 
                    alt="Preview" 
                    width={100}
                    height={100}
                    className="max-w-xs rounded-lg"
                  />
                )}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Content (Bengali)</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Enter content description in Bengali"
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white min-h-[100px]"
              required
            />
          </div>

          <div className="flex space-x-4">
            <Button type="submit" className="flex-1">
              {content ? "Update Content" : "Save as Draft"}
            </Button>
            {!content && (
              <Button 
                type="button" 
                onClick={() => {
                  setFormData({ ...formData, status: 'published' });
                  setTimeout(() => {
                    const form = document.querySelector('form');
                    if (form) form.requestSubmit();
                  }, 100);
                }}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                Publish Now
              </Button>
            )}
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DashboardPage; 