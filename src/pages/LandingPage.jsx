import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import { useState } from "react";
import RegistrationModal from "../components/RegistrationModal";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="landing">
      <div className="hero">
        <h1>Manage Projects Like a Pro</h1>
        <p className="tagline">
          Organize, track, and deliver your projects with ease.
        </p>
        <div className="landing-btns">
          <Link to="/login">
            <button className="cta-button">Get Started – Login</button>
          </Link>

          <button className="reg-btn" onClick={() => setIsModalOpen(true)}>
            Register
          </button>
        </div>
      </div>

      <footer className="landing-footer">
        <p>© 2025 ProjectHub. All rights reserved.</p>
      </footer>
      {isModalOpen && (
        <RegistrationModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
