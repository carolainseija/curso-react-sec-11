import React, { useState } from 'react';
import Cart from '../components/Cart/Cart';
import Header from "../components/Layout/Header";
import Meals from '../components/Meals/Meals';
import './css/pages.css';

function Home() {

    const [cartIsShow, setCartIsShow] = useState(false)

    const showCartHandler = () => {
        setCartIsShow(true);
    }

    const hideCartHadler = () => {
        setCartIsShow(false);
    }

    return (
        <div className='home'>
            {
                cartIsShow && <Cart showCartHandler={showCartHandler} hideCartHadler={hideCartHadler} />
            }
            <Header showCartHandler={showCartHandler} />
            <main>
                <Meals />
            </main>
        </div>
    );
}

export default Home;
