"use client";

import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [numUsers, setNumUsers] = useState(1);

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "500 AI-generated content pieces",
        "3 marketing channels",
        "Basic analytics",
        "Email support",
        "Brand voice customization",
        "Content scheduling"
      ],
      notIncluded: [
        "Advanced analytics",
        "Competitor analysis",
        "Dedicated account manager"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      description: "For growing businesses and agencies",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Unlimited AI-generated content",
        "10 marketing channels",
        "Advanced analytics",
        "Priority email support",
        "Brand voice customization",
        "Content scheduling",
        "Competitor analysis",
        "A/B testing tools"
      ],
      notIncluded: [
        "Dedicated account manager",
        "Custom AI model training"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Unlimited everything",
        "Unlimited marketing channels",
        "Advanced analytics & reporting",
        "24/7 priority support",
        "Brand voice customization",
        "Content scheduling",
        "Competitor analysis",
        "A/B testing tools",
        "Dedicated account manager",
        "Custom AI model training",
        "API access",
        "SSO & SAML"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  // Calculate price based on number of users and billing cycle
  const calculatePrice = (basePrice: number) => {
    if (numUsers <= 10) {
      return basePrice;
    } else {
      // Add $10 per user above 10
      return basePrice + (numUsers - 10) * 10;
    }
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that works best for your team. All plans include our core AI features.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 mb-8">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors relative ${
                billingCycle === 'annual'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>

          {/* Users input for pricing calculator */}
          <div className="max-w-xs mx-auto mb-8">
            <label htmlFor="numUsers" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Users
            </label>
            <input
              type="number"
              id="numUsers"
              min={1}
              value={numUsers}
              onChange={(e) => setNumUsers(Math.max(1, Number(e.target.value)))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const basePrice = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            const price = calculatePrice(basePrice);

            return (
              <Card
                key={index}
                glassmorphism={plan.popular}
                className={`flex flex-col ${
                  plan.popular 
                    ? 'border-2 border-blue-500 transform scale-105 relative' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        ${price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'annual' && plan.monthlyPrice && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Billed annually (${plan.annualPrice})
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start opacity-50">
                        <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-500 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full mt-auto"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Need something custom?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Contact our sales team
            </a>{" "}
            for enterprise solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
