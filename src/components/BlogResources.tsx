import React from 'react';
import Card from './Card';

const BlogResources: React.FC = () => {
  const resources = [
    {
      title: "How AI is Transforming Marketing in 2025",
      description: "Explore the latest trends and innovations in AI-powered marketing strategies.",
      href: "#",
    },
    {
      title: "Getting Started with ADmyBRAND AI Suite",
      description: "A comprehensive guide to help you maximize the potential of our AI tools.",
      href: "#",
    },
    {
      title: "Case Study: Boosting ROI with Predictive Analytics",
      description: "Learn how companies are leveraging predictive analytics to increase their marketing ROI.",
      href: "#",
    },
  ];

  return (
    <section id="blog-resources" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Resources
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest articles, guides, and case studies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <Card key={index} glassmorphism className="p-6 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 flex-grow">
                {resource.description}
              </p>
              <a
                href={resource.href}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
              >
                Read More &rarr;
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogResources;
