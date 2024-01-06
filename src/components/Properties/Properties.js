// src/components/Properties/Properties.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Properties.css";
import viewProperties from "./ViewProperties"; 

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mainpropertycontainer">
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Wilmington Properties"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="property-container">
        {viewProperties.map((viewProperty) => (
          <div
            key={viewProperty.id}
            className="property-card"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <img
              src={viewProperty.image}
              alt={`Property ${viewProperty.id} - ${viewProperty.address}`}
            />
            <div className="property-details">
              <p>{viewProperty.price}</p>
              <p>{viewProperty.details}</p>
              <p className="property-address">{viewProperty.address}</p>
              <Link key={viewProperty.id} to={`/property/${viewProperty.id}`}>
                <button className="green-button">View!</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
