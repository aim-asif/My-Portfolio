"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      avatar: "SJ",
      content: "Asif transformed our entire product design process. His attention to detail and user-centered approach helped us increase user engagement by 40%. The final product exceeded our expectations in every way.",
      project: "Product Design & UI/UX"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GreenEats",
      avatar: "MC",
      content: "Working with Asif on our brand identity was incredible. He captured our vision perfectly and delivered a cohesive brand system that has significantly improved our market presence. Highly recommended!",
      project: "Brand Identity & Design"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Creative Studios",
      avatar: "ER",
      content: "Asif's video editing skills are outstanding. He took our raw footage and created compelling marketing videos that helped us secure major clients. His creative vision and technical expertise are unmatched.",
      project: "Video Production & Editing"
    },
    {
      name: "David Thompson",
      role: "Product Manager",
      company: "InnovateLab",
      avatar: "DT",
      content: "The website Asif built for us is not only beautiful but also performs exceptionally well. His development skills combined with design expertise created a perfect user experience that our customers love.",
      project: "Web Development & Design"
    }
  ];

  const nextTestimonial = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setSlideDirection(null);
    }, 400);
  };

  const prevTestimonial = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setSlideDirection(null);
    }, 400);
  };

  const goToTestimonial = (index: number) => {
    const direction = index > currentIndex ? 'left' : 'right';
    setSlideDirection(direction);
    setTimeout(() => {
      setCurrentIndex(index);
      setSlideDirection(null);
    }, 400);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-900 dark:to-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working together.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <Card 
              className={`border-0 shadow-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md transition-all duration-400 linear ${
                slideDirection === 'left' 
                  ? 'transform translate-x-full opacity-0' 
                  : slideDirection === 'right' 
                  ? 'transform -translate-x-full opacity-0' 
                  : 'transform translate-x-0 opacity-100'
              }`}
            >
              <CardContent className="p-12">
                <div className="text-center space-y-8">
                  {/* Quote Symbol */}
                  <div className="flex justify-center">
                    <svg 
                      className="w-12 h-12 text-blue-500 dark:text-blue-400" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl lg:text-2xl text-neutral-700 dark:text-neutral-200 leading-relaxed italic">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <Avatar className="w-16 h-16 border-4 border-white dark:border-neutral-800 shadow-lg">
                      <AvatarFallback className="text-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {currentTestimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-semibold text-lg text-neutral-900 dark:text-white">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-400">
                        {currentTestimonial.role}
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-500">
                        {currentTestimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                    {currentTestimonial.project}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full p-0 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors duration-200"
              disabled={slideDirection !== null}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  disabled={slideDirection !== null}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex
                      ? "bg-blue-600"
                      : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full p-0 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors duration-200"
              disabled={slideDirection !== null}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-neutral-600 dark:text-neutral-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
            <div className="text-neutral-600 dark:text-neutral-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.9/5</div>
            <div className="text-neutral-600 dark:text-neutral-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
            <div className="text-neutral-600 dark:text-neutral-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 