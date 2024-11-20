import React from "react";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import useFetch from "../../hooks/useFetch";
import Mon_Block from "../mon_block/mon_home_block";
import "./home.css";

const Home = () => {
  const { data, loading, error } = useFetch("https://entrywaybackend.onrender.com/monuments");

  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <center>
          <h1 className="title">Monuments</h1>
          <div className="monuments-container">
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">Failed to fetch data.</div>}
            {!loading &&
              !error &&
              data.map((item) => <Mon_Block item={item} key={item._id} />)}
          </div>
        </center>
      </div>
    </div>
  );
};

export default Home;
