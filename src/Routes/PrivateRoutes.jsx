import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  
  if (loading) {
    return (
      <progress
      className="progress progress-secondary w-56"
      value="100"
      max="100"
    ></progress>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoutes;
