import "./mon_home_block.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authcontext.js";
import Reserve from "../reserve/reserve";

const Mon_Block = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      navigate("/auth/login");
    } else {
      navigate(`/monuments/${item._id}`);
    }
  };

  return (
    <div className="mon-block">
      <div className="mon-card">
        <div className="mon-image-container">
          <img className="mon-image" src={item.photos} alt={item.name} />
          <div className="mon-rating">{`☆ ${item.rating}`}</div>
        </div>
        <div className="mon-details">
          <h3 className="mon-name">{item.name}</h3>
          <p className="mon-location">{item.city}</p>
        </div>
        <button className="check-button" onClick={handleClick}>
          Check Availability
        </button>
      </div>
      {openModal && <Reserve setOpen={setOpenModal} />}
    </div>
  );
};

export default Mon_Block;
