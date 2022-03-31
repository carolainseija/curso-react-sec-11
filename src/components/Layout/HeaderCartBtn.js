import React, { Fragment } from 'react';
import CartIcon from '../Cart/CartIcon.js';
import classes from './HeaderCartBtn.module.css';

const HeaderCartBtn = ({showCartHandler}) => {

 
    return (
        <button onClick={showCartHandler} className={classes.button}>
            <span>
                <CartIcon />
            </span>
            <span>
                Tu carrito
            </span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )
}

export default HeaderCartBtn;
