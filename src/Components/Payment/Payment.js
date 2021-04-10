import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider/StateProvider';
import './Payment.css';
const Payment = () => {
    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className = "payment">
            <div className="payment__container">
                <h1>Checkout {<Link to = "/checkout">{basket?.length} items</Link>}
                </h1>
        {/* payment Sevtion Delivery Address */}
        <div className="payment__section">
        <div className="payment__title">
            <h3>Delivery Address</h3>
        </div>
        <div className="payment__address">
            <p>{user?.email}</p>
            <p>1213 React Line</p>
            <p>Los Angeles. CA</p>
        </div>
        </div>

        {/* payment Sevtion Review Items*/}
        <div className="payment__section">
        <div className="payment__title">
            <h3>Review Items and delivery</h3>
        </div>
        <div className="payment__items">
            {basket.map(item =>{
                <CheckoutProduct
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                />
            })}
        </div>
            </div>

        {/* payment Sevtion Payment method*/}

        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                {/* Stripr magic will go */}

            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Payment;