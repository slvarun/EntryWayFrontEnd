import "./add_mon.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Add_mon = () => {
  const navigate = useNavigate();

  // State for form data
  const [credentials, setCredentials] = useState({
    name: "",
    description: "",
    city: "",
    adult_price: "",
    child_price: "",
    photos: "",
    rating: "",
    address: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/monuments/create_mon`, credentials);
      navigate(`/`);
    } catch (err) {
      console.error("Error creating monument:", err);
    }
  };

  return (
    <div className="add-monument-container">
      <h1 className="heading">Add Monument</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Monument Name</label>
            <input
              id="name"
              value={credentials.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter monument name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              value={credentials.city}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter city"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={credentials.description}
              onChange={handleChange}
              className="form-control"
              rows="4"
              placeholder="Enter monument description"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              value={credentials.address}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="photos">Photo URL</label>
            <input
              id="photos"
              value={credentials.photos}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter photo URL"
              required
            />
            {credentials.photos && (
              <img
                src={credentials.photos}
                alt="Monument"
                className="preview-image"
              />
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="adult_price">Adult Price</label>
              <input
                id="adult_price"
                type="number"
                value={credentials.adult_price}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter adult price"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="child_price">Child Price</label>
              <input
                id="child_price"
                type="number"
                value={credentials.child_price}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter child price"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input
                id="rating"
                type="number"
                step="0.1"
                max="5"
                value={credentials.rating}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter rating (0-5)"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_mon;
