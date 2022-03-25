import React from 'react';
import MealItem from './MealItem';
import classes from './MealItemForm.css';

const MealItemForm = () => {
    return (
        <form className={classes.form}>
            <input  className={classes.input}/>
            <button className={classes.button}>+ Añadir</button>
        </form>
    )
}

export default MealItemForm;