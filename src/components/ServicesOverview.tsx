import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Monitor, 
  PenTool, 
  Video, 
  FileText, 
  Code,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const ServicesOverview = () => {
  const services = [
    {
      icon: Palette,
      title: "Product Design",
      description: "End-to-end product design from concept to final deliverables. User research, wireframing, and prototyping.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces with seamless user experiences that drive engagement.",
      features: ["Interface Design", "User Experience", "Interaction Design", "Usability Testing"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: PenTool,
      title: "Brand Identity",
      description: "Complete brand identity packages including logos, color palettes, typography, and brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing for marketing, social media, and creative content with motion graphics.",
      features: ["Video Production", "Motion Graphics", "Color Grading", "Sound Design"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Content Writing",
      description: "Compelling copywriting and content creation for websites, marketing materials, and digital platforms.",
      features: ["Copywriting", "Content Strategy", "SEO Writing", "Brand Voice"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web development using React, Next.js, and other cutting-edge technologies.",
      features: ["Frontend Development", "React/Next.js", "Responsive Design", "Performance"],
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Services I Offer
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            From concept to completion, I provide comprehensive design and development solutions 
            that help businesses grow and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-neutral-50 dark:bg-neutral-800">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-neutral-900 dark:text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-600 dark:text-neutral-300">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview; 