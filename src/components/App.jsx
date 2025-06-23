import React, { useState } from "react";
import { Header } from "./header";  // Adjust the path if necessary
    
const App = () => {
  const [location, setLocation] = useState("");
  const [stores, setStores] = useState([]);

  const handleSearch = (location) => {
    setLocation(location);
    // Fetch or set available stores based on the location
    // Here, we are just using a static example
    setStores(["Store 1", "Store 2", "Store 3"]);
  };

  return (
    <div>
      <Header data={{ title: "Find Stores", paragraph: "Locate stores near you" }} onSearch={handleSearch} />
      <div className="results">
        <h2>Location: {location}</h2>
        <h3>Available Stores:</h3>
        <ul>
          {stores.map((store, index) => (
            <li key={index}>{store}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
