import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    logout(); // Remove token from localStorage and reset user context
    history.push("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
