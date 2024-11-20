import "./mon_page.css";
import Navbar from "../navbar/navbar";
import useFetch from "../../hooks/useFetch.js";
import { useLocation, Link } from "react-router-dom";

const Mon = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading } = useFetch(
    `https://entrywaybackend.onrender.com/monuments/find/${id}`
  );

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="mon-container">
          <div className="mon-content">
            {/* Image Section */}
            <div className="image-container">
              <img className="mon-image" src={data.photos} alt={data.name} />
            </div>

            {/* Details Section */}
            <div className="details-container">
              <h1 className="mon-title">{data.name}</h1>
              <div className="mon-address">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="location-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <span className="location-name">{data.city}</span>
              </div>
              <p className="mon-desc">{data.description}</p>
              <Link to={`/monuments/book/${data._id}`}>
                <button className="book-button">Book Now</button>
              </Link>
            </div>
          </div>

          {/* Ticket Section */}
          <div className="ticket-section">
            <div className="ticket-info">
              <h3>Ticket Details</h3>

              <ul className="terms">
                <li>The e-ticket is not transferable.</li>
                <li>Entry Fee is not refundable.</li>
                <li>E-ticket cancellations are not permitted.</li>
                <li>
                  The Monument is open for visitors between sunrise and sunset.
                </li>
              </ul>
            </div>
            <div className="ticket-details">
              <div className="price">
                <h5>For Adults</h5>
                <p className="amount">₹ {data.adult_price}</p>
              </div>
              <div className="price">
                <h5>For Children</h5>
                <span>(2 - 11)</span>
                <p className="amount">₹ {data.child_price}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mon;
