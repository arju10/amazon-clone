import { Star } from "@material-ui/icons";
import React, { useState } from "react";
import "./Product.css";
import {useStateValue} from '../StateProvider/StateProvider';

const Product = ({id,title, image, price, rating}) => {
  // const [{basket}, dispatch] = useStateValue();
  const [{basket}, dispatch] = useStateValue();
  
  const addToBasket = ()=>{
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image : image,
        price:price,
        rating:rating
      }
    })
  }
  return (
    <div className="product">
      <div className="product__info">
      <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>
            {Array(rating).fill().map((_,i) =>(
              <Star />
            ))}
           
          </p>
        </div>
      </div>

      <img
        src={image}
        alt=""
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
