import React, { Fragment } from 'react';
import Cart from '../components/Cart/Cart';
import Header from "../components/Layout/Header";
import Meals from '../components/Meals/Meals';
import './css/pages.css';

function Home() {
    return (
        <div className='home'>
            <Cart />
            <Header />
            <main>
                <Meals />
            </main>
        </div>
    );
}

export default Home;
