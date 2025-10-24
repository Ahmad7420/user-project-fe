import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="hero">
        <h1>Manage Projects Like a Pro</h1>
        <p className="tagline">
          Organize, track, and deliver your projects with ease.
        </p>
        <Link to="/login">
          <button className="cta-button">Get Started – Login</button>
        </Link>
      </div>

      <footer className="landing-footer">
        <p>© 2025 ProjectHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
