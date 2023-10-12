import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
