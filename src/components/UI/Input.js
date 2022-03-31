import React, { Fragment } from 'react';
import Input from '../../UI/Input';
import classes from './Input.module.css';

const Inoput = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* ..props.inpu asegura que todo los props se agreguen al label */}
            <input id={props.input.id} {...props.input} />
        </div>
    )
}

export default Input;
