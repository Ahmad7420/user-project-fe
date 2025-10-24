import { useState } from "react";
import "../styles/loginPage.css";
import { userLogin } from "../services/userService";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!username || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(username)) {
      setError("Please enter a valid username");
      setLoading(false);
      return;
    }

    await userLogin({ username, password })
      .then((response) => {
        setLoading(false);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Login failed");
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to your account</p>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="username"
              placeholder="you@example.com"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* <p className="signup-text">
              Don't have an account? <a href="#signup">Sign up</a>
            </p> */}
      </div>
    </div>
  );
}
