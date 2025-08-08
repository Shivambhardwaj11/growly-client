import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const businessTypes = [
    'Freelancer',
    'Coach',
    'Small Business Owner',
    'Ecommerce Seller',
    'Marketing Agency',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.businessType) newErrors.businessType = 'Please select a business type';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);
        try {
         const res = await fetch('http://localhost:5000/api/leads', {
          method: 'POST',
            headers: {
            'Content-Type': 'application/json'
          },
             body: JSON.stringify(formData)  
        });

        if (!res.ok) throw new Error('Network response was not ok');

        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);
        } catch (error) {
        alert('There was an error submitting your request. Please try again.');
        } finally {
        setIsSubmitting(false);
        }
    };


  return (
    <section id="demo-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Ads?
          </h2>
          <p className="text-xl text-gray-600">
            Book a free demo and see how Growly can boost your ad performance
          </p>
        </div>

        {showSuccess && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Thank you! We'll be in touch within 24 hours to schedule your demo.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500/20 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500/20 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500/20 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Business Type *</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500/20 ${
                  errors.businessType ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select your business type</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              placeholder="Tell us about your current advertising challenges..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Submitting...' : 'Book Free Demo'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
