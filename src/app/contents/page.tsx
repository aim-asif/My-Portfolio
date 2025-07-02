"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Play, 
  Image as ImageIcon,
  Calendar,
  Building2,
  ChevronDown
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

const ContentsPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const [contents, setContents] = useState<Content[]>([]);

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "awareness", name: "Awareness" },
    { id: "sales", name: "Sales" },
    { id: "story", name: "Story" },
    { id: "promotion", name: "Promotion" },
    { id: "educational", name: "Educational" },
    { id: "entertainment", name: "Entertainment" }
  ];

  const companies = [
    { id: "all", name: "All Companies" },
    { id: "techstart", name: "TechStart Inc." },
    { id: "greeneats", name: "GreenEats" },
    { id: "creative-studios", name: "Creative Studios" },
    { id: "innovate-lab", name: "InnovateLab" },
    { id: "digital-marketing", name: "Digital Marketing Pro" }
  ];

  // Load contents from localStorage and filter only published ones
  useEffect(() => {
    const savedContents = localStorage.getItem("dashboardContents");
    if (savedContents) {
      const allContents: Content[] = JSON.parse(savedContents);
      const publishedContents = allContents.filter((content: Content) => content.status === 'published');
      setContents(publishedContents);
    }
  }, []);

  const filteredContents = contents.filter((content: Content) => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || content.category === selectedCategory;
    const matchesCompany = selectedCompany === "all" || content.company.toLowerCase().includes(companies.find(c => c.id === selectedCompany)?.name.toLowerCase() || "");

    return matchesSearch && matchesCategory && matchesCompany;
  });

  const displayedContents = filteredContents.slice(0, visibleItems);
  const hasMore = displayedContents.length < filteredContents.length;

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredContents.length));
  };

  const handleCardClick = (contentId: number) => {
    router.push(`/contents/${contentId}`);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            আমার কনটেন্ট
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            বিভিন্ন কোম্পানির জন্য তৈরি করা সোশ্যাল মিডিয়া কনটেন্ট। টেক্সট, ইমেজ এবং ভিডিও সহ।
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input
              type="text"
              placeholder="কনটেন্ট খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-neutral-500" />
              <Select
                value={selectedCategory}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
                className="w-48"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </div>

            {/* Company Filter */}
            <div className="flex items-center space-x-2">
              <Building2 className="h-4 w-4 text-neutral-500" />
              <Select
                value={selectedCompany}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCompany(e.target.value)}
                className="w-48"
              >
                {companies.map(company => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-neutral-600 dark:text-neutral-400">
            {filteredContents.length} টি কনটেন্ট পাওয়া গেছে
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedContents.map((content: Content) => (
            <Card 
              key={content.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => handleCardClick(content.id)}
            >
              {/* Media */}
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                {content.mediaUrl ? (
                  content.mediaType === "video" ? (
                    <video 
                      src={content.mediaUrl} 
                      className="w-full h-full object-cover"
                      muted
                    />
                  ) : (
                    <Image 
                      src={content.mediaUrl || ""} 
                      alt={content.title}
                      className="w-full h-full object-cover"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {content.mediaType === "video" ? (
                      <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <ImageIcon className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 dark:bg-neutral-900/90">
                    {content.mediaType === "video" ? "ভিডিও" : "ইমেজ"}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              <CardHeader className="pb-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                    {content.content}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Company & Client */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Building2 className="h-4 w-4 text-neutral-500" />
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                      {content.company}
                    </span>
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {content.client}
                  </div>
                </div>

                {/* Category & Date */}
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {categories.find(c => c.id === content.category)?.name}
                  </Badge>
                  <div className="flex items-center space-x-1 text-xs text-neutral-500">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(content.date).toLocaleDateString('bn-BD')}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {content.tags.slice(0, 3).map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {content.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{content.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-neutral-500 border-t pt-3">
                  <span>{content.views} বার দেখা হয়েছে</span>
                  <span>{content.likes} পছন্দ</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <Button 
              onClick={loadMore}
              variant="outline"
              size="lg"
              className="group"
            >
              আরও দেখুন
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredContents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              কোন কনটেন্ট পাওয়া যায়নি। অনুগ্রহ করে আপনার অনুসন্ধান পরিবর্তন করুন।
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentsPage; 