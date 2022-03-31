import React from 'react';
import Input from '../../UI/Input';
import MealItem from './MealItem';
import classes from './MealItemForm.module.css';

const MealItemForm = () => {
    return (
        <form className={classes.form}>
           <Input label="Monto" />
            <button className={classes.button}>+ Añadir</button>
        </form>
    )
}

export default MealItemForm;
