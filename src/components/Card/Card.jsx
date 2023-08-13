import React from "react";
import "./card.css";
import { ToastContainer, toast } from "react-toastify";

export default function Card(props) {
  const addToCart = () => {
    console.log(props.name);
    console.log(props.price);
    toast.success(props.name + " added to cart.");
  };
  return (
    <div className="card-container">
      <div className="cardImage">
        <img src={props.path} alt="bookImage" />
        <p>{props.category}</p>
      </div>
      <div className="bookInfo">
        <p>
          <u>{props.name}</u>
        </p>
        <span id="bookDescription">{props.description}</span>
        <div className="priceAndCart">
          <p>Rs.{props.price}</p>
          <div className="addToCart" onClick={addToCart}>
            Add to Cart
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/external-obivous-color-kerismaker/48/external-cart-ecommerce-color-obivous-color-kerismaker.png"
              alt="cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
