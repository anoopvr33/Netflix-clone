import { Outlet } from "react-router-dom";
import { isAuthenticated, checkpermission } from "../../utils";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ roles }) => {
  return isAuthenticated() && checkpermission(roles) ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/login" />
  );
};

export default ProtectedRoute;
