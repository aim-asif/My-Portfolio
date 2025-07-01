"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-blue-50 to-purple-50 dark:from-neutral-950 dark:via-blue-950/20 dark:to-purple-950/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Available for new projects
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Creative Designer &{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              
              <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                I craft beautiful digital experiences through product design, UI/UX, and creative content. 
                Passionate about turning ideas into impactful solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <Link href="https://github.com" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://linkedin.com" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://twitter.com" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
              <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700"></div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md shadow-2xl border-none bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Avatar className="w-32 h-32 border-4 border-white dark:border-neutral-800 shadow-lg">
                    <AvatarFallback className="text-4xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                      AM
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                      Asif Mahmud
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 font-medium">
                      Product Designer · UI/UX Designer · Creative Developer
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      Product Design
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      UI/UX
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      Branding
                    </span>
                    <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                      Video Editing
                    </span>
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                      Content Writing
                    </span>
                  </div>

                  <div className="w-full pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white">50+</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white">5+</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">Years</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-neutral-900 dark:text-white">30+</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 