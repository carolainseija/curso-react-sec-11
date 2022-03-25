import React from 'react';
import classes from './AvailableMeals.module.css';
// import classes from '../UI/Card.js';
import Card from  '../UI/Card.js';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Hamburguesas',
        description: 'Comunes: Lechuga y tomate',
        price: 80.00,
    },
    {
        id: 'm2',
        name: 'Hamburguesas',
        description: 'Completas: Huevo, queso, lechuga y tomate ',
        price: 150.00,
    },
    {
        id: 'm3',
        name: 'Pizzetas',
        description: 'panceta, cheddar',
        price: 240,
    },
    {
        id: 'm4',
        name: 'Milanesa en dos panes comun',
        description: 'Fritas',
        price: 250.00,
    },
    {
        id: 'm5',
        name: 'Milanesa en dos panes completa',
        description: 'Fritas +  huevo + queso + picklets, etc',
        price: 390.00,
    },
    {
        id: 'm6',
        name: 'Milanesa Napolitana',
        description: 'Para uno: Fritas-- Para dos:Ensalada mixta',
        price: 680.00,
    },
];

const AvailableMeals = () => {
    //una forma que tambien funciona:
    // const mealsList = DUMMY_MEALS.map(meal => <li key={meal.id}>{meal.name}</li>);
    const mealsList = DUMMY_MEALS.map((meal)=> 
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      />)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;
