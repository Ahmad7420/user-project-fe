import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import "./styles/globals.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
