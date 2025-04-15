import React from 'react';
import { FaStar } from 'react-icons/fa';
import Hero from '../components/Hero'; // make sure this path is correct!

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Navigation */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">RentSeek</h1>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900">How It Works</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-black transition">
            Join Waitlist
          </button>
        </div>
      </header>


      {/* Hero Section (Replaces old centered text block) */}
      <main className="flex-grow">
        <Hero />

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Rating Profiles",
                  description: "Verified ratings and reviews for all users",
                  icon: <FaStar className="text-2xl text-blue-500 mb-3" />
                },
                {
                  title: "Tenant Ratings",
                  description: "Make informed rental decisions",
                  icon: <FaStar className="text-2xl text-blue-500 mb-3" />
                },
                {
                  title: "Owner Ratings",
                  description: "Find trustworthy property managers",
                  icon: <FaStar className="text-2xl text-blue-500 mb-3" />
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 mx-1" />
            ))}
            <span className="ml-2 font-medium">4.0/5 average rating</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} RentalRatings. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

// src/pages/LandingPage.jsx