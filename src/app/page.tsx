import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import DemoVideo from '@/components/DemoVideo';
import BlogResources from '@/components/BlogResources';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>
        <ScrollAnimation>
          <DemoVideo />
        </ScrollAnimation>
        <ScrollAnimation>
          <BlogResources />
        </ScrollAnimation>
        <ScrollAnimation>
          <Features />
        </ScrollAnimation>
        <ScrollAnimation>
          <Pricing />
        </ScrollAnimation>
        <ScrollAnimation>
          <Testimonials />
        </ScrollAnimation>
        <ScrollAnimation>
          <FAQ />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
