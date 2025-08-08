import React from 'react';
import { Target, Zap, Download } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: '1. Input Your Product',
    description: 'Simply describe your product or service and target audience'
  },
  {
    icon: Zap,
    title: '2. AI Magic',
    description: 'Our AI analyzes your input and generates multiple ad variations'
  },
  {
    icon: Download,
    title: '3. Export & Use',
    description: 'Download your ads in all formats ready for Meta and Google Ads'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            How Growly Works
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            Three simple steps to transform your product into high-converting ad creatives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-purple-100 border border-purple-200">
                <step.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
