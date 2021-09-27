import React from "react";
import "./Items.css";

const Items = ({ id, name, explanation, pictureLink, starRating, price }) => {
  return (
    <div className="product">
      <div className="product_info">
        <div className="product_heading">
          <p className="product_name">
            {id} <span>{name}</span>
          </p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(Math.round(starRating))
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <p className="product_desc">{explanation}</p>
      </div>

      <img src={pictureLink} alt="" />

      <button>Add to Cart 🛒</button>
    </div>
  );
};

export default Items;
