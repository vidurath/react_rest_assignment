import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("email");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const Public = (props) => {
  const auth = useAuth();

  return auth ? <Navigate to="/search" /> : <Outlet />;
};

export default Public;
