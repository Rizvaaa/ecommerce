// // protectors/UserProtector.js
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// const UserProtector = ({ children }) => {
// //   const { user } = useAuth();
// const user = localStorage.getItem("use")

//   if (!user) {
//     return <Navigate to="/login" replace />; // Redirect to login if not authenticated
//   }

//   return children; // Render the protected component
// };

// export default UserProtected
import { Outlet, Navigate } from "react-router-dom";

const UserProtectedRouter = () => {
  const isAuthenticated = localStorage.getItem("user");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default UserProtectedRouter;