/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const TenantList = lazy(() => import('./pages/TenantList'));



function App() {
  const [tenants, setTenants] = useState([]);
  const Home = lazy(() => import('./pages/Home'));
  const TenantList = lazy(() => import('./pages/TenantList'));
  useEffect(() => {
    // Fetch tenants from the backend API
    axios.get('http://localhost:5001/api/tenants')
      .then(response => setTenants(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Tenant Rating App Nigga</h1>
      <ul>
        {tenants.map(tenant => (
          <li key={tenant._id}>
            {tenant.name} - {tenant.email} - {tenant.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; */
/*
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/features/Navbar';
import LandingPage from './pages/LandingPage';

// Add this route (typically as your root path)
<Route path="/" element={<LandingPage />} />

// Lazy-loaded pages with proper dynamic imports
const Home = lazy(() => import('./pages/Home'));
const TenantList = lazy(() => import('./pages/TenantList'));
const OwnerList = lazy(() => import('./pages/OwnerList'));
const Rate = lazy(() => import('./pages/Rate'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tenants" element={<TenantList />} />
            <Route path="/owners" element={<OwnerList />} />
            <Route path="/rate/:tenantId" element={<Rate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}*/

/*export default function App() {
  return (
    <div>
      <h1>Hello from App</h1>
    </div>
  );
}*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        {/* Add more routes here as you build more pages */}
      </Routes>
    </Router>
  );
}
