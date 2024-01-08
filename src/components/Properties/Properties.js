// src/components/Properties/Properties.js

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
  
  {
    id: 9,
    image: "URL_TO_IMAGE_9",
    price: "$750,000 / $7-12k Month",
    details: "3 beds / 2.5 baths / 2300 sqft",
    address: "Charleston, SC",
  },
  {
    id: 10,
    image: "URL_TO_IMAGE_10",
    price: "$620,000 / $6-11k Month",
    details: "4 beds / 3 baths / 2600 sqft",
    address: "Myrtle Beach, SC",
  },
  {
    id: 11,
    image: "URL_TO_IMAGE_11",
    price: "$890,000 / $8-14k Month",
    details: "5 beds / 4 baths / 3200 sqft",
    address: "Columbia, SC",
  },
  {
    id: 12,
    image: "URL_TO_IMAGE_12",
    price: "$1,200,000 / $12-20k Month",
    details: "6 beds / 5.5 baths / 4000 sqft",
    address: "Atlanta, GA",
  },
  {
    id: 13,
    image: "URL_TO_IMAGE_13",
    price: "$580,000 / $5-9k Month",
    details: "3 beds / 2 baths / 1800 sqft",
    address: "Augusta, GA",
  },
  {
    id: 14,
    image: "URL_TO_IMAGE_14",
    price: "$950,000 / $9-15k Month",
    details: "4 beds / 3.5 baths / 3400 sqft",
    address: "Macon, GA",
  },

  ];
  return (
    <div className="PropertyListingOfTheDayBg">
      <h1
        className="PropertyListingDetailsTitle"
        data-aos="fade-down"
        data-aos-duration="3000"
      >

      </h1>
      {otherProperties.map((property) => (
        <div
          key={property.id}
          className="property-card-container"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <img
            src={property.image}
            alt={`Property ${property.id} - ${property.address}`}
            className="PropertyListingImage"
          />
          <div className="PropertyListingDetails">
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
  );
};

export default Properties;
