import React, { useState } from "react";
import "./card.css";

export default function Card(props) {
  const [isActive, setActive] = useState("Hot");

  const addToCart = () => {
    console.log(props.name);
    console.log(props.price);
    alert("Your " + props.name + " is added to cart.");
  };
  return (
    <>
      {/* {console.log("this is card")} */}
      <div className="card">
        <div className="card-container">
          <div className="cardImage">
            <img src={props.path} alt="lll" />
          </div>
          {/* <div className="coffeeInfo">
          </div> */}
          <div className="bookInfo">
            <p>
              <u>{props.name}</u>
            </p>
            <p>{props.category}</p>
            {/* <p id="bookDescription">{props.description}</p> */}
            <div className="priceAndCart">
              <p>Price: Rs.{props.price}</p>
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/external-obivous-color-kerismaker/48/external-cart-ecommerce-color-obivous-color-kerismaker.png"
                alt="cart"
                onClick={addToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
