import React, { Fragment } from 'react';
import Header from "../components/Layout/Header";
import Meals from '../components/Meals/Meals';

function Index() {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default Index;
