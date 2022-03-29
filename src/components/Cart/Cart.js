import React, { Fragment } from 'react';
import classes from './Cart.module.css';

const Cart = () => {
    const cartItems = <ul className={classes['cart-items']}>
        {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }]
            .map((item) => <li>{item.name}</li>)}  </ul>
    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>
                    Total Amount
                    </span>
                    <span>
                        35.62
                    </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Cerrar</button>
                <button className={classes.button}>Ordenar</button>
            </div>
            <div></div>
        </div>
    )
}