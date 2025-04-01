import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // Change this boolean based on your auth logic

function ProtectedRoute({ element }) {
    return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;