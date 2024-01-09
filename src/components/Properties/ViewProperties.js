import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ViewProperties.css";

// Placeholder images
import Property1 from "../Properties/PropertyListingImages/Property1.jpg";
import Property2 from "../Properties/PropertyListingImages/Property2.jpg";
import Property3 from "../Properties/PropertyListingImages/Property3.jpg";
import Property4 from "../Properties/PropertyListingImages/Property4.jpg";
import Property5 from "../Properties/PropertyListingImages/Property5.jpg";
import Property6 from "../Properties/PropertyListingImages/Property6.jpg";
import Property7 from "../Properties/PropertyListingImages/Property7.jpg";
import Property8 from "../Properties/PropertyListingImages/Property8.jpg";
import Property9 from "../Properties/PropertyListingImages/Property9.jpg";
import Property10 from "../Properties/PropertyListingImages/Property10.jpg";

const ViewProperties = () => {
  const otherProperties = [
    {
      id: 1,
      image: Property1,
      price: "$950,000 / $9-15k Month",
      details: "4 beds / 3 baths / 2800 sqft",
      address: "123 Main St, Wilmington, NC",
      agent: "John Doe",
    },
    {
      id: 2,
      image: Property2,
      price: "$550,000 / $5-10k Month",
      details: "2 beds / 2 baths / 1500 sqft",
      address: "456 Oak St, Wilmington, NC",
      agent: "Jane Doe",
    },
    {
      id: 3,
      image: Property3,
      price: "$1,500,000 / $15-25k Month",
      details: "6 beds / 5 baths / 4000 sqft",
      address: "789 Pine St, Wilmington, NC",
      agent: "Bob Smith",
    },
    {
      id: 4,
      image: Property4,
      price: "$1,100,000 / $11-18k Month",
      details: "5 beds / 4.5 baths / 3500 sqft",
      address: "101 Maple St, Wilmington, NC",
      agent: "Alice Johnson",
    },
    {
      id: 5,
      image: Property5,
      price: "$750,000 / $7-12k Month",
      details: "3 beds / 2.5 baths / 2300 sqft",
      address: "202 Elm St, Wilmington, NC",
      agent: "Charlie Brown",
    },
    {
      id: 6,
      image: Property6,
      price: "$620,000 / $6-11k Month",
      details: "4 beds / 3 baths / 2600 sqft",
      address: "303 Birch St, Wilmington, NC",
      agent: "Lucy Smith",
    },
    {
      id: 7,
      image: Property7,
      price: "$890,000 / $8-14k Month",
      details: "5 beds / 4 baths / 3200 sqft",
      address: "404 Cedar St, Wilmington, NC",
      agent: "Linus Johnson",
    },
    {
      id: 8,
      image: Property8,
      price: "$1,200,000 / $12-20k Month",
      details: "6 beds / 5.5 baths / 4000 sqft",
      address: "505 Walnut St, Wilmington, NC",
      agent: "Sally Brown",
    },
    {
      id: 9,
      image: Property9,
      price: "$580,000 / $5-9k Month",
      details: "3 beds / 2 baths / 1800 sqft",
      address: "606 Pineapple St, Wilmington, NC",
      agent: "Schroeder",
    },
    {
      id: 10,
      image: Property10,
      price: "$950,000 / $9-15k Month",
      details: "4 beds / 3.5 baths / 3400 sqft",
      address: "707 Orange St, Wilmington, NC",
      agent: "Woodstock",
    },
  ];

  const [searchInput, setSearchInput] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const PropertyDetail = ({ property }) => (
    <div className="PropertyOfTheDayBg">
      <Carousel className="Carousel" showThumbs={false}>
        {property.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              className="PropertyImage"
              alt={`Property ${property.id} - ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>

      <div className="DetailsAndForm">
        <div className="PropertyDetails">
          <div className="DetailPropertyNameSize text-1xl ">
            <div className="PropertyDetailsTitle font-bold ">
              About This Property!
            </div>
            <p>{property.price}</p>
            <p>{property.details}</p>
            <p>{property.address}</p>
            <p>Agent</p>
            <p>{property.agent}</p>
          </div>
        </div>
        <div className="ContactForm ">
          <form>
            <div className="ContactFormTitle font-bold text-2xl">
              Contact Your Agent!
            </div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>

            <input className="mb-6 mt-6 " type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="PropertyListingOfTheDayBg">
      <h1
        className="PropertyListingDetailsTitle"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        <input
          type="text"
          placeholder="Search Wilmington Properties..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="animated-search-bar"
        />
      </h1>

      {selectedProperty ? (
        <PropertyDetail property={selectedProperty} />
      ) : (
        otherProperties.map((property) => (
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
              <button onClick={() => setSelectedProperty(property)}>
                View!
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewProperties;
