// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { FaUsers, FaUserTie, FaStar, FaChartLine } from 'react-icons/fa';

export default function Home() {
  // Sample stats - replace with real data from your backend
  const stats = [
    { value: '1,240', label: 'Total Ratings', icon: <FaStar className="text-2xl" /> },
    { value: '320', label: 'Tenants Rated', icon: <FaUsers className="text-2xl" /> },
    { value: '180', label: 'Owners Rated', icon: <FaUserTie className="text-2xl" /> },
    { value: '4.2', label: 'Avg Rating', icon: <FaChartLine className="text-2xl" /> }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">TenantRating</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Share your rental experiences and help others make informed decisions
        </p>
      </section>

      {/* Stats Dashboard */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
              <div className="text-blue-500">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call-to-Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/tenants"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FaUsers /> Browse Tenants
          </Link>
          <Link
            to="/owners"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <FaUserTie /> Browse Owners
          </Link>
          <Link
            to="/rate"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            <FaStar /> Submit a Rating
          </Link>
        </div>
      </section>

      {/* Testimonials (Optional) */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-center">What Our Users Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "This platform helped me find trustworthy tenants!",
            "Finally a fair system for both renters and property owners."
          ].map((quote, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-2">"{quote}"</p>
              <p className="text-gray-500">— Satisfied User</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}