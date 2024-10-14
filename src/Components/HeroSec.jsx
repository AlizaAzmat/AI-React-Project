import React from "react";
import "bulma/css/bulma.min.css";

const HeroSec = ({ title, subtitle, description, imageUrl }) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-half">
              <h1 className="title is-1 has-text-centered" style={{color: 'hsl(302, 88%, 35%)'}}>{title}</h1>
              <h3 className="subtitle is-4 pt-4 pr-2 has-text-centered has-text-info-dark">{subtitle}</h3>
        
              <p className="description is-4 pt-2  has-text-centered has-text-grey-dark">
                {description}
              </p>
            </div>
            <div className="column is-half">
              <figure className="image is-square">
                <img
                  src={imageUrl}
                  alt="Description of image"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
    
  );
};

export default HeroSec;
