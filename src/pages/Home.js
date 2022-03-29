import React, { Fragment } from 'react';
import Header from "../components/Layout/Header";
import Meals from '../components/Meals/Meals';
import './css/pages.css';

function Home() {
    return (
        <div className='home'>
            <Header />
            <main>
                <Meals />
            </main>
        </div>
    );
}

export default Home;