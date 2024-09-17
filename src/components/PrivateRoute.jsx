import { Navigate, Outlet } from "react-router-dom";

// PrivateRoute component
const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
