import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./styles/style.css";
import "./index.css";
import Authentication from "./components/auth/Authentication";
import NoteApp from "./components/NoteApp"; // Pastikan path ini sesuai dengan struktur folder Anda

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/notes" replace />
            ) : (
              <Authentication onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route path="/notes" element={isLoggedIn ? <NoteApp /> : <Navigate to="/" replace />} />
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
