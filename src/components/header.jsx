import React, { useState, useEffect } from "react";
import './css/header.css';

export const Header = ({ data, onSearch }) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleSearchClick = () => {
    onSearch(location);
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {data ? data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{data ? data.paragraph : "Loading"}</p>
                <input
                  type="search"
                  className="searchBar styled-input"
                  value={location}
                  onChange={(e)=>setLocation(e.target.value)}
                ></input>
                <a
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={handleSearchClick}
                >
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
