import { useAppData } from "../context/AppContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { isAuth, loading } = useAppData();
  if (loading) return null;
  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
};

// const PublicRoute = () => {
//   const { isAuth, user, loading } = useAppData();

//   if (loading) return null

//   if (isAuth && user?.role !== null) {
//     return <Navigate to="/" replace />;
//   }

//   if (isAuth && user?.role === null) {
//     return <Navigate to="/select-role" replace />;
//   }

//   return <Outlet />;
// };

export default PublicRoute;
