import React from 'react';
import { Navigate } from 'react-router-dom'; // Import from react-router-dom v6
import { useAuthContext } from '../providers/authContext';

const ProtectedRoute = ({ component }) => {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? component : <Navigate to="/login" />;
};

export default ProtectedRoute;