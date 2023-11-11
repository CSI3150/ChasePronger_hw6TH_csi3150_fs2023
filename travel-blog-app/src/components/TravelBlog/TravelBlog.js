import React from 'react';
import './TravelBlog.css';

function TravelBlog({ heading, image1, image2, image3, description }) {
  return (
    <div className="travel-blog">
      <h3>{heading}</h3>
      <div className="images-container">
        <img src={image1} alt={`${heading} 1`} />
        <img src={image2} alt={`${heading} 2`} />
        <img src={image3} alt={`${heading} 3`} />
      </div>
      <p>{description}</p>
    </div>
  );
}

export default TravelBlog;
