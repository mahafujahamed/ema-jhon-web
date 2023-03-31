import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img, name, seller, ratings, price, quantity} = props.product;
    const addToCart = props.addToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h5 className='product-name'>{name}</h5>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => addToCart(props.product
                )} className='btn-cart'>
                    Add Cart
                    <FontAwesomeIcon icon={faCartShopping} />
                    </button>
        </div>
    );
};

export default Product;