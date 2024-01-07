// src\components\Properties\Properties.js

import React from "react";
import { Link } from "react-router-dom";

import "./Properties.css"; 

const Properties = () => {
  const otherProperties = [
    {
      id: 5,
      image: "URL_TO_IMAGE_5",
      price: "$950,000 / $9-15k Month",
      details: "4 beds / 3 baths / 2800 sqft",
      address: "Asheville, NC",
    },
    {
      id: 6,
      image: "URL_TO_IMAGE_6",
      price: "$550,000 / $5-10k Month",
      details: "2 beds / 2 baths / 1500 sqft",
      address: "Greenville, SC",
    },
    {
      id: 7,
      image: "URL_TO_IMAGE_7",
      price: "$1,500,000 / $15-25k Month",
      details: "6 beds / 5 baths / 4000 sqft",
      address: "Hilton Head, SC",
    },
    {
      id: 8,
      image: "URL_TO_IMAGE_8",
      price: "$1,100,000 / $11-18k Month",
      details: "5 beds / 4.5 baths / 3500 sqft",
      address: "Savannah, GA",
    },
  ];

  return (
    <div>

      <div className="property-container">
        <h1
          className="Todays-Title"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          Other Property Listings
        </h1>
        {otherProperties.map((property) => (
          <div
            key={property.id}
            className="property-card"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <img
              src={property.image}
              alt={`Property ${property.id} - ${property.address}`}
            />
            <div className="property-details">
              <p>{property.price}</p>
              <p>{property.details}</p>
              <p className="property-address">{property.address}</p>
              <Link key={property.id} to={`/properties/${property.id}`}>
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
//add back that search bar