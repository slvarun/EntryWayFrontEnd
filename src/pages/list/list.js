import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";
import { format } from "date-fns";

import Navbar from "../navbar/navbar";
import SearchItem from "../searchItem/Searchitem.js";
import "./list.css";

const List = () => {
  const location = useLocation();

  // States for filters and search criteria
  const [destination, setDestination] = useState(location.state?.Destination || "");
  const [date, setDate] = useState(location.state?.date || [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3000);

  // Fetch data based on search criteria
  const { data, loading, error, reFetchData } = useFetch(
    `https://entrywaybackend.onrender.com/monuments?city=${destination}&min=${min}&max=${max}`
  );

  // Trigger search with updated filters
  const handleSearch = () => {
    reFetchData();
  };

  return (
    <div>
      <Navbar />
      <div className="list-container">
        <div className="list-wrapper">
          {/* Search Filters */}
          <div className="list-search">
            <h1 className="ls-title">Search</h1>

            <div className="ls-item">
              <label>Destination</label>
              <input
                placeholder="Enter destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                type="text"
              />
            </div>

            <div className="ls-item">
              <label>Min Budget</label>
              <input
                placeholder="0"
                value={min}
                onChange={(e) => setMin(e.target.value)}
                type="number"
              />
            </div>

            <div className="ls-item">
              <label>Max Budget</label>
              <input
                placeholder="3000"
                value={max}
                onChange={(e) => setMax(e.target.value)}
                type="number"
              />
            </div>

            <div className="ls-item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)} className="date-picker">
                {`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className="date-range"
                />
              )}
            </div>

            <button onClick={handleSearch} className="search-btn">
              Search
            </button>
          </div>

          {/* Search Results */}
          <div className="list-result">
            {loading ? (
              <div className="loading-message">Loading...</div>
            ) : error ? (
              <div className="error-message">Failed to fetch data. Please try again.</div>
            ) : (
              data.map((item) => <SearchItem item={item} key={item._id} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
