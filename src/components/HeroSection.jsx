import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-700 border border-purple-200">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Ad Creation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Create High-Converting Ads in Seconds —
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Powered by AI</span>
          </h1>

          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-600">
            No design or copywriting needed. Just enter your product and let Growly do the rest. Generate stunning ad creatives for Meta and Google Ads in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo-form"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book Free Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <button className="inline-flex items-center px-8 py-4 font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-50 border border-gray-300 shadow-lg hover:shadow-xl">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="rounded-2xl shadow-2xl overflow-hidden bg-white border border-gray-200">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg font-medium text-gray-600">AI Ad Creative Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
