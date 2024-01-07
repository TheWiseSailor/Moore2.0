// src\components\Properties\ViewProperties.js

import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Properties.css"; 

const ViewProperties = ({ properties }) => {
  const { id } = useParams();

  const property = properties.find((property) => property.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
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
          <div className="DetailPropertyNameSize text-1xl">
            <div className="PropertyDetailsTitle font-bold">
              About This Property!
            </div>
            <p>{property.price}</p>
            <p>{property.details}</p>
            <p>{property.address}</p>
            <p>Agent: {property.agent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProperties;
