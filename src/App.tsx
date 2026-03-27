import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AssignedLeads from "./pages/AssignedLeads";
import ContactedLeads from "./pages/ContactedLeads";
import ClosedLeads from "./pages/ClosedLeads";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route element={<AppLayout />}>
          
          {/* PUBLIC */}
          <Route path="/login" element={<Login />} />

          {/* PROTECTED */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
  path="/assigned-leads"
  element={
    <ProtectedRoute>
      <AssignedLeads />
    </ProtectedRoute>
  }
/>

<Route
  path="/contacted-leads"
  element={
    <ProtectedRoute>
      <ContactedLeads />
    </ProtectedRoute>
  }
/>

<Route
  path="/closed-leads"
  element={
    <ProtectedRoute>
      <ClosedLeads />
    </ProtectedRoute>
  }
/>


        </Route>

        {/* REDIRECT */}
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
