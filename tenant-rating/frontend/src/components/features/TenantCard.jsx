import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaUserAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
// import { format } from 'date-fns'; // Uncomment if needed

const TenantCard = ({ tenant }) => {
  // Calculate star rating display
  const renderStars = () => {
    const stars = [];
    const rating = tenant.avgRating || 0;
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.floor(rating) ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Header with avatar */}
      <div className="bg-blue-600 p-4 text-white flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center mr-4">
          {tenant.profileImage ? (
            <img 
              src={tenant.profileImage} 
              alt={tenant.name} 
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <FaUserAlt className="text-xl" />
          )}
        </div>
        <div>
          <h3 className="font-bold text-lg">{tenant.name}</h3>
          <p className="text-blue-100 text-sm">{tenant.location || 'Location not specified'}</p>
        </div>
      </div>

      {/* Body content */}
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {renderStars()}
          </div>
          <span className="text-gray-700 text-sm">
            ({tenant.reviewCount || 0} reviews)
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div>
            <p className="text-gray-500">Since</p>
            <p>{tenant.memberSince || 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-500">Last Active</p>
            <p>{tenant.lastActive || 'Recently'}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-500 text-sm mb-1">About</p>
          <p className="line-clamp-2">
            {tenant.bio || 'No description provided'}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between">
          <Link
            to={`/tenants/${tenant.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Details
          </Link>
          <Link
            to={`/rate/${tenant.id}`}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
          >
            Rate
          </Link>
        </div>
      </div>
    </div>
  );
};

TenantCard.propTypes = {
  tenant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avgRating: PropTypes.number,
    reviewCount: PropTypes.number,
    profileImage: PropTypes.string,
    location: PropTypes.string,
    memberSince: PropTypes.string,
    lastActive: PropTypes.string,
    bio: PropTypes.string
  }).isRequired
};

export default TenantCard;