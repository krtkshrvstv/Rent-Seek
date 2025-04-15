// components/RatingCard.jsx
import React from 'react';

const RatingCard = () => {
  return (
    <div className="w-[300px] bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex justify-end text-sm text-gray-400 mb-2">
        Rating Profile
      </div>
      <div className="flex justify-between mb-3 text-gray-700 font-medium">
        <span>Tenant Ratings</span>
        <span>Owner Ratings</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex text-yellow-400 text-xl">
          ★★★★★
        </div>
        <span className="text-gray-700 text-sm font-medium">4.0/5</span>
      </div>
    </div>
  );
};

export default RatingCard;
