import React, { Fragment } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ hideCartHadler, showCartHandler}) => {

    const cartItems = <ul className={classes['cart-items']}>
        {[{ id: "c1", name: "nombre de comida", amount: 2, price: 12.99 }]
            .map((item) => <li>{item.name}</li>)}  </ul>
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>
                    Cantidad total a pagar 
                </span>
                <span>
                    35.62
                </span>
            </div>
            <div className={classes.actions}>
                <button onClick={hideCartHadler} className={classes['button--alt']}>Cerrar</button>
                <button  className={classes.button}>ORDENAR</button>
            </div>
            <div></div>
        </Modal>
    )
}

export default Cart;