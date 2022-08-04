import React from "react";
import "../ProdDescription/ProdDescription.css";

const ProdDescription = () => {
  return (
    <div>
      <div className="prod-description-grid-container">

      {/* Image Container */}
        <div className="prod-description-grid-product">
          <div className="prod-description-grid-product-bg">
            <img
              className="prod-description-product-image-one"
              src="https://svgsilh.com/svg/2026810-e91e63.svg"
            />
          </div>
        </div>


        {/* Details Container */}
        <div className="prod-description-grid-item">
          <h2 className="tagline-of-prod-description">
            Body Spray With
            <br /> Natural Oils
          </h2>
          <p className="body-spray-description-para">
            The line of Women's sprays Cosmetics in 2019 was
            <br /> replenished with a new masterpiece - a body spray
            <br />
            based on natural oils.in it the floral sound is diluted with <br/>berry
            chords and complemented with woody shades.
          </p>
          <div className="prod-description-grid-item-button">
            <button className="prod-description-buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDescription;
