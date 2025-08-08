import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import FeaturesSection from './components/FeaturesSection';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import HowItWorks from './components/HowItworks';

const GrowlyLanding = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default GrowlyLanding;

