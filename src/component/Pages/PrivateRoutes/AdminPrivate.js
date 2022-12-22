import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import UseAdmin from '../../hooks/UseAdmin';
import Spinner from '../../Spinner/Spinner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [ isAdmin , isAdminLoding]= UseAdmin(user?.email)
    const location = useLocation();

    if (loading || isAdminLoding) {
        return <Spinner></Spinner>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;