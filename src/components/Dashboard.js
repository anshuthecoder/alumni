import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome, {user && user.role}!</h1>
      {user.role === "admin" && <p>Admin Dashboard Content</p>}
      {user.role === "alumni" && <p>Alumni Dashboard Content</p>}
    </div>
  );
};

export default Dashboard;
