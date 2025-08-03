"use client";

import React, { useState, useEffect } from 'react';
import Card from './Card';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechInnovate",
      content: "ADmyBRAND has transformed our content creation process. We've increased our output by 300% while maintaining quality. The AI suggestions are incredibly accurate.",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "GrowthHackers Inc",
      content: "The predictive analytics feature alone is worth the investment. We've reduced our customer acquisition costs by 40% since implementing ADmyBRAND.",
      avatar: "https://i.pravatar.cc/100?img=2",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Content Manager",
      company: "BrandVision",
      content: "As a small team, we needed to punch above our weight. ADmyBRAND gave us enterprise-level marketing capabilities without the enterprise price tag.",
      avatar: "https://i.pravatar.cc/100?img=3",
      rating: 4
    },
    {
      name: "David Thompson",
      role: "E-commerce Director",
      company: "RetailPro",
      content: "The brand voice consistency feature ensures all our communications align with our brand guidelines. It's like having a dedicated brand manager 24/7.",
      avatar: "https://i.pravatar.cc/100?img=4",
      rating: 5
    },
    {
      name: "Jessica Williams",
      role: "Digital Marketing Lead",
      company: "StartupHub",
      content: "Implementation was seamless, and the results were immediate. Our engagement rates have improved by 65% across all channels since we started using ADmyBRAND.",
      avatar: "https://i.pravatar.cc/100?img=5",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Marketing Teams</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See what our customers say about their experience with ADmyBRAND AI Suite.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <Card glassmorphism className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-20 h-20 rounded-full mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                  <div className="flex justify-center md:justify-start mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic text-center md:text-left">
                "{testimonials[currentIndex].content}"
              </p>
            </Card>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
            <div className="text-gray-600 dark:text-gray-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">98%</div>
            <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">3.2x</div>
            <div className="text-gray-600 dark:text-gray-300">Avg. ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
