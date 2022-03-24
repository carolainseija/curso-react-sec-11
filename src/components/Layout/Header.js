import React, {Fragment} from 'react';
import mealsImage from '../../images/meals.jpg';
import classes from './Header.module.css';
import HeaderCartBtn from './HeaderCartBtn';
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <HeaderCartBtn />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="imagen de comida"/>
            </div>
        </Fragment>
    )
}

export default Header;
