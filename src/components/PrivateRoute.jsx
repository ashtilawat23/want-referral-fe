import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ role }) => {
  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  const userRoles = user?.['https://claims.wantreferral.com/roles'] || [];
  const hasRole = role ? userRoles.includes(role) : true;

  if (!hasRole) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default PrivateRoute;