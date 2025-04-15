import React, { useState } from 'react';
import axios from 'axios';

const RatingForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit rating to backend
    axios.post('http://localhost:5001/api/ratings', { rating, comment })
      .then(response => alert('Rating submitted!'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Rate a Tenant/Owner</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RatingForm;