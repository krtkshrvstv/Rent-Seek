// src/pages/Rate.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import RatingForm from '../components/features/RatingForm';

export default function Rate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch user being rated
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError('Failed to load user details');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:5001/api/ratings', {
        userId: id,
        ...formData
      });
      navigate(`/tenants`, { 
        state: { message: 'Rating submitted successfully!' } 
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit rating');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 max-w-2xl">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg">
          {error}
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-2">Rate {user?.name}</h1>
      <p className="text-gray-600 mb-6">Share your experience with this {user?.type || 'user'}</p>
      
      <RatingForm 
        onSubmit={handleSubmit} 
        error={error}
        initialValues={{ rating: 3, comment: '', anonymous: false }}
      />
    </div>
  );
}