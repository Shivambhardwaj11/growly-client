import React from 'react';
import { Zap, Target, Download } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI Creative Generator',
    description: 'Generate unlimited ad variations with different styles, colors, and layouts'
  },
  {
    icon: Target,
    title: 'Headline Optimizer',
    description: 'AI-powered headlines that convert better based on your industry data'
  },
  {
    icon: Download,
    title: 'Export Ad Formats',
    description: 'Download in all required formats for Meta, Google, and other platforms'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Powerful Features for Better Ads
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-600">
            Everything you need to create, optimize, and export professional ad creatives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-purple-100">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
