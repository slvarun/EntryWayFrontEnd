import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Reserve from "../reserve/reserve";
import "./admin_mon_block.css";

const A_Mon_Block = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Admin/${item._id}`);
  };

  return (
    <div className="cover">
      <div className="mon_container">
        <div className="mon_cards">
          <div className="card">
            <div className="mon_image">
              <img
                className="mon_img"
                src={item.photos || "default-image.jpg"} // Fallback for missing images
                alt={item.name || "Unknown Monument"} // Fallback for missing names
              />
              <div className="monrating">{`☆ ${item.rating || "N/A"}`}</div>
              <div className="mon_min_details">
                <div className="name">{item.name || "No Name Available"}</div>
                <div className="place">{item.city || "Unknown Location"}</div>
              </div>
            </div>
          </div>
          <button className="siCheckbutton" onClick={handleClick}>
            Search availability
          </button>
        </div>
      </div>
      {openModal && <Reserve setOpen={setOpenModal} />}
    </div>
  );
};

export default A_Mon_Block;
