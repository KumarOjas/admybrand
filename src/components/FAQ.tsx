"use client";

import React, { useState } from 'react';
import Card from './Card';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does ADmyBRAND&apos;s AI content generation work?",
      answer: "Our AI analyzes your brand guidelines, target audience, and industry best practices to create content that resonates with your customers. We use advanced natural language processing models trained on marketing-specific data to ensure high-quality, relevant content."
    },
    {
      question: "Can I integrate ADmyBRAND with my existing marketing tools?",
      answer: "Yes! ADmyBRAND offers integrations with popular marketing platforms including HubSpot, Mailchimp, Hootsuite, and more. We also provide a robust API for custom integrations. Check our documentation for a full list of supported integrations."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most users see immediate improvements in content creation speed. For campaign optimization and analytics features, we typically see significant results within 2-4 weeks as the AI models learn your specific patterns and audience preferences."
    },
    {
      question: "Is my data secure with ADmyBRAND?",
      answer: "Absolutely. We use enterprise-grade encryption for all data transmission and storage. We are GDPR compliant and undergo regular security audits. Your data is never shared with third parties or used to train our models without explicit permission."
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include email support with 24-hour response times. Professional and Enterprise plans include priority support with 4-hour response times. Enterprise customers get 24/7 phone support and a dedicated account manager."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your billing period. We do ask for feedback when you cancel to help us improve our service."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                glassmorphism
                className="overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <svg 
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card glassmorphism className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                Contact Support
              </button>
              <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
