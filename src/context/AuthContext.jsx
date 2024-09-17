import { createContext, useState } from "react";

// Create a Context for Authentication
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock login function
  const login = (token) => {
    // Ideally, you will store the token in localStorage or cookies
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  // Mock logout function
  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
