import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Let&apos;s work together to bring your ideas to life. I&apos;m here to help you create 
            something amazing that will make a lasting impact.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Card */}
          <Card className="border-0 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-blue-100 mb-6">
                Have a project in mind? Let&apos;s discuss how I can help bring your vision to reality.
              </p>
              <Button asChild size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Schedule Card */}
          <Card className="border-0 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Schedule a Call</h3>
              <p className="text-blue-100 mb-6">
                Book a free consultation call to discuss your project requirements and timeline.
              </p>
              <Button asChild size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact#schedule">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Resume Card */}
          <Card className="border-0 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Download Resume</h3>
              <p className="text-blue-100 mb-6">
                Get a detailed overview of my experience, skills, and past projects.
              </p>
              <Button asChild size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/resume.pdf">
                  Download CV
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Quick response time</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Flexible collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 