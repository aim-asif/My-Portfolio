import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const FeaturedWork = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      category: "Product Design",
      description: "Complete redesign of a modern e-commerce platform focusing on user experience and conversion optimization.",
      image: "/api/placeholder/600/400",
      tags: ["UI/UX", "Product Design", "E-commerce"],
      link: "/portfolio/ecommerce-redesign"
    },
    {
      title: "Brand Identity for TechStart",
      category: "Brand Identity",
      description: "Comprehensive brand identity package including logo, color palette, typography, and brand guidelines.",
      image: "/api/placeholder/600/400",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      link: "/portfolio/techstart-branding"
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      description: "Intuitive mobile app design with seamless user experience and modern interface patterns.",
      image: "/api/placeholder/600/400",
      tags: ["Mobile Design", "UI/UX", "App Design"],
      link: "/portfolio/mobile-app-design"
    }
  ];

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Explore some of my recent projects that showcase my design and development expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 bg-white dark:bg-neutral-900 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" asChild>
                    <Link href={project.link}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="ghost" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30">
                  <Link href={project.link}>
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork; 