import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <a href="/order">Order</a>
            <a href="/order review">Order Review</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
        </div>
    );
};

export default Header;