import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [toggle, setToggle] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: toggle,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleToggle = () => {
    setToggle(!toggle);
    setCredentials((prev) => ({ ...prev, isAdmin: !toggle }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(credentials);
      await axios.post("http://localhost:5000/auth/register", credentials);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <h1 className="brand-title">EntryWay</h1>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="register-input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="register-input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="register-input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group checkbox-group">
            <input
              type="checkbox"
              id="isAdmin"
              checked={toggle}
              onChange={handleToggle}
              className="register-checkbox"
            />
            <label htmlFor="isAdmin">Is Admin?</label>
          </div>
          <div className="button-group">
            <button type="submit" className="register-button">
              Register
            </button>
          </div>
        </form>
        <div className="register-redirect">
          Already have an account? <a href="/auth/login">Login here</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
