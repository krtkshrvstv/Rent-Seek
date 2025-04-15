import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tenants">Tenants</Link>
      <Link to="/owners">Owners</Link>
      <Link to="/rate">Rate</Link>
    </nav>
  );
};

export default Navbar;