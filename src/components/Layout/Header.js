import React from 'react';
import mealsImage from '../../images/meals.jpg';
import classes from '.Header.module.css';
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="imagen de comida"/>
            </div>
        </Fragment>
    )
}

export default Header;
