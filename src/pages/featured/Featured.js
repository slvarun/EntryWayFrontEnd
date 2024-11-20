import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("/monuments/countByCity?cities=secbad,Agra,Hyderabad");

  if (loading) {
    return <div className="loading-message">Loading, please wait...</div>;
  }

  if (error) {
    return <div className="error-message">Error loading data. Please try again.</div>;
  }

  return (
    <div className="featured-items">
      <div className="featured">
        <img
          src="https://res.cloudinary.com/drs7nvxpy/image/upload/v1674662522/entry_way/taj_hbppj6.jpg"
          alt="Taj Mahal"
          className="featured-img"
        />
        <div className="featured-titles">
          <h3>Agra</h3>
          <h4>{data[1]} properties</h4>
        </div>
      </div>

      <div className="featured">
        <img
          src="https://res.cloudinary.com/drs7nvxpy/image/upload/v1671033283/entry_way/charminar_qtzdks.jpg"
          alt="Charminar"
          className="featured-img"
        />
        <div className="featured-titles">
          <h3>Hyderabad</h3>
          <h4>{data[2]} properties</h4>
        </div>
      </div>

      <div className="featured">
        <img
          src="https://res.cloudinary.com/drs7nvxpy/image/upload/v1674662549/entry_way/qutub_minar_otlunn.jpg"
          alt="Qutub Minar"
          className="featured-img"
        />
        <div className="featured-titles">
          <h3>Secunderabad</h3>
          <h4>{data[0]} properties</h4>
        </div>
      </div>
    </div>
  );
};

export default Featured;
