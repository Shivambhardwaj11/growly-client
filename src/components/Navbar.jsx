import React, { useState } from 'react';
import { Zap, Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95 backdrop-blur-sm border-gray-800' : 'bg-white/95 backdrop-blur-sm border-gray-200'} border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-purple-600' : 'bg-gradient-to-r from-purple-600 to-pink-600'}`}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Growly</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-600 transition-colors`}>Features</a>
            <a href="#how-it-works" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-600 transition-colors`}>How it Works</a>
            <button onClick={toggleDarkMode} className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="space-y-4">
              <a href="#features" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} block hover:text-purple-600`}>Features</a>
              <a href="#how-it-works" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} block hover:text-purple-600`}>How it Works</a>
              <button
                onClick={toggleDarkMode}
                className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center space-x-2 hover:text-purple-600`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
