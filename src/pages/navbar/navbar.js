import "./navbar.css";
import { AuthContext } from "../../context/authcontext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const handleAddMon = () => {
    navigate("/monuments/create_mon");
  };

  const handleCheckOrder = () => {
    navigate("/Admin/mon");
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="navbar-brand">
          EntryWay
        </Link>
      </div>
      <div className="navbar-menu">
        {user ? (
          <div className="navbar-user">
            <div className="user-info">
              <span className="username">{user.username}</span>
              <button className="logout-button" onClick={logoutUser}>
                Logout
              </button>
            </div>
            {user.isAdmin && (
              <div>
                <div className="admin-actions">
                  <button className="navbar-button" onClick={handleAddMon}>
                    Add Monument
                  </button>
                  <button className="navbar-button" onClick={handleCheckOrder}>
                    Check Orders
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/auth/login" className="login-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
