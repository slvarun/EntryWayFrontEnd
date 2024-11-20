import "./login.css";
import { AuthContext } from "../../context/authcontext";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="brand-title">EntryWay</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={credentials.username}
              onChange={handleChange}
              className="login-input"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
              className="login-input"
              required
            />
          </div>
          {error && <div className="error-message">{error.message}</div>}
          <div className="button-group">
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <div className="register-redirect">
          <p>
            Don't have an account? <Link to="/auth/register">Sign up</Link>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
