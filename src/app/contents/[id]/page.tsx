"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Play, 
  Image as ImageIcon,
  Calendar,
  Building2,
  Eye,
  Heart,
  Share2,
  Tag
} from "lucide-react";

const ContentDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedContents = localStorage.getItem("dashboardContents");
    if (savedContents) {
      const contents = JSON.parse(savedContents);
      const foundContent = contents.find((c: any) => c.id === parseInt(params.id as string));
      
      // Only show published content
      if (foundContent && foundContent.status === 'published') {
        setContent(foundContent);
      } else {
        setContent(null);
      }
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            কনটেন্ট পাওয়া যায়নি
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            আপনি যে কনটেন্ট খুঁজছেন তা পাওয়া যায়নি বা প্রকাশিত হয়নি।
          </p>
          <Button onClick={() => router.push('/contents')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            ফিরে যান
          </Button>
        </div>
      </div>
    );
  }

  const categories = [
    { id: "awareness", name: "Awareness" },
    { id: "sales", name: "Sales" },
    { id: "story", name: "Story" },
    { id: "promotion", name: "Promotion" },
    { id: "educational", name: "Educational" },
    { id: "entertainment", name: "Entertainment" }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => router.push('/contents')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>সব কনটেন্ট দেখুন</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Media Section */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden rounded-t-lg">
                  {content.mediaUrl ? (
                    content.mediaType === "video" ? (
                      <video 
                        src={content.mediaUrl} 
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img 
                        src={content.mediaUrl} 
                        alt={content.title}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {content.mediaType === "video" ? (
                        <Play className="h-16 w-16 text-white" />
                      ) : (
                        <ImageIcon className="h-16 w-16 text-white" />
                      )}
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 dark:bg-neutral-900/90">
                      {content.mediaType === "video" ? "ভিডিও" : "ইমেজ"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Eye className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">দেখা হয়েছে</span>
                  </div>
                  <p className="text-xl font-bold text-neutral-900 dark:text-white">
                    {content.views}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">পছন্দ</span>
                  </div>
                  <p className="text-xl font-bold text-neutral-900 dark:text-white">
                    {content.likes}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Share2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">শেয়ার</span>
                  </div>
                  <p className="text-xl font-bold text-neutral-900 dark:text-white">
                    {Math.floor(content.views / 10)}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content Details */}
          <div className="space-y-6">
            {/* Title and Category */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                {content.title}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="outline">
                  {categories.find(c => c.id === content.category)?.name}
                </Badge>
                <Badge variant="secondary">
                  {content.mediaType === "video" ? "ভিডিও" : "ইমেজ"}
                </Badge>
              </div>
            </div>

            {/* Company & Client Info */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  কোম্পানি তথ্য
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      {content.company}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {content.client}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      প্রকাশের তারিখ
                    </p>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      {new Date(content.date).toLocaleDateString('bn-BD', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Description */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  কনটেন্ট বিবরণ
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {content.content}
                </p>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white flex items-center space-x-2">
                  <Tag className="h-5 w-5" />
                  <span>ট্যাগসমূহ</span>
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {content.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                পছন্দ করুন
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="h-4 w-4 mr-2" />
                শেয়ার করুন
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailPage; 