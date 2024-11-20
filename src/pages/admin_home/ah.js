import React from "react";
import Header from "../header/header";
import useFetch from "../../hooks/useFetch";
import A_Mon_Block from "../admin_mon_block/admin_mon_block.js";
import "./ah.css";

const A_Home = () => {
  const { data, loading, error } = useFetch(`https://entrywaybackend.onrender.com/monuments`);

  return (
    <div>
      <Header />
      <div className="grid-container">
        <center>
          <div className="Title">Monuments</div>
          <div className="cont">
            {loading && <div>Loading...</div>}
            {error && <div>Error loading data</div>}
            {!loading && !error && (
              <>
                {data.map((item) => (
                  <A_Mon_Block item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </center>
      </div>
    </div>
  );
};

export default A_Home;
