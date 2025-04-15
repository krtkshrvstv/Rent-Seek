import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OwnerList = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    // Fetch owners from backend
    axios.get('http://localhost:5001/api/owners')
      .then(response => setOwners(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Owner List</h1>
      <ul>
        {owners.map(owner => (
          <li key={owner.id}>
            {owner.name} - {owner.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnerList;