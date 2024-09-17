import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AddUniversity from "./components/AddUniversity";
import UniversityList from "./components/UniversityList";
import AlumniList from "./components/AlumniList";
import AddAlumni from "./components/AddAlumni";
import AdminDashboard from "./pages/AdminDashboard";
import AlumniDashboard from "./pages/AlumniDashboard";
import UniversityDashboard from "./pages/UniversityDashboard";
import { useAuth } from "./services/authService";
const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { user } = useAuth();

  const getDashboard = () => {
    switch (user?.role) {
      case "admin":
        return <AdminDashboard />;
      case "alumni":
        return <AlumniDashboard />;
      case "university":
        return <UniversityDashboard />;
      default:
        return <Navigate to="/login" />;
    }
  };
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard>{getDashboard()}</Dashboard>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* </Route> */}
        <Route path="/add-alumni" element={<AddAlumni />} />
        <Route path="/" element={<AlumniList />} />
        <Route path="/add-university" element={<AddUniversity />} />
        <Route path="/university-list" element={<UniversityList />} />
      </Routes>
    </Router>
  );
};

const WrappedApp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default WrappedApp;
