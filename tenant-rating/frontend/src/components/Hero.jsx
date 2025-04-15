import React from 'react';
import RatingCard from '../components/RatingCard';

const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16 py-20">
        
        {/* Left Text Content */}
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Find Better Rentals & Tenants
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-lg">
            The first platform that helps both tenants and property owners make informed decisions with honest, verified reviews and ratings.
          </p>
          <p className="text-sm text-gray-500 mt-2 flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            No credit card required. Early access for waitlist members.
          </p>
        </div>

        {/* Right: Image/Mock Card */}
        <div className="flex-1 flex justify-center">
          <RatingCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
