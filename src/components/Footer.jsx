import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Growly</span>
        </div>
        <p className="text-gray-600">
          © 2025 Growly. AI-powered ad creative generation for small businesses.
        </p>
      </div>
    </footer>
  );
};

export default Footer;