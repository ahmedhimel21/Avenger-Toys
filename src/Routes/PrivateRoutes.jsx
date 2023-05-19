import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if(!user){
    // alert('Please login first')
    toast.error('You have to log in first to view details')
    
  }
  else if (loading) {
    return (
      <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style="width: 45%"
        >
          {" "}
          45%
        </div>
        <ToastContainer />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoutes;
