import React, { Fragment } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {

    const cartItems = <ul className={classes['cart-items']}>
        {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }]
            .map((item) => <li>{item.name}</li>)}  </ul>
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>
                    Cantidad total
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
        </Modal>
    )
}

export default Cart;