"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import Modal from './Modal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [errors, setErrors] = useState<{email?: string; company?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: {email?: string; company?: string} = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!company) {
      newErrors.company = 'Company name is required';
    } else if (company.length < 2) {
      newErrors.company = 'Company name must be at least 2 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', { email, company });
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after submission
        setEmail('');
        setCompany('');
        setErrors({});
        
        // Close modal after a short delay
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSubmitted(false);
        }, 2000);
      }, 1000);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Reset form when closing modal
    setEmail('');
    setCompany('');
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              ✨ AI-Powered Marketing Revolution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Transform Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brand</span> with AI
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              ADmyBRAND AI Suite leverages cutting-edge artificial intelligence to supercharge your marketing efforts. Create compelling content, optimize campaigns, and drive conversions like never before.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg" 
                glassmorphism
                onClick={() => setIsModalOpen(true)}
                className="shadow-lg"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                glassmorphism
                className="shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </Button>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <Image 
                    key={item}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" 
                    src={`https://i.pravatar.cc/40?img=${item}`} 
                    alt={`User ${item}`}
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 font-bold">10,000+</span> marketers trust ADmyBRAND
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-full h-96 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 max-w-xs">
                      <h3 className="text-xl font-bold mb-2">AI Marketing Dashboard</h3>
                      <p className="text-sm mb-4">Real-time analytics and insights</p>
                      <div className="flex justify-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-200"></div>
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse animation-delay-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-2xl shadow-xl z-[-1] opacity-70"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-400 rounded-2xl shadow-xl z-[-1] opacity-70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleModalClose}
        title="Start Your Free Trial"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            Experience the power of ADmyBRAND AI Suite with our 14-day free trial. No credit card required.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="you@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                  errors.company 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                placeholder="Your Company"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
              )}
            </div>
            <Button 
              type="submit"
              variant="primary" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center justify-center">
                  <svg className="h-5 w-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Success!
                </span>
              ) : (
                "Start Free Trial"
              )}
            </Button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
