import React, { Fragment } from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            {/* <label htmlFor={props.input.id}>{props.lbael}</label> */}
            {/* ..props.inpu asegura que todo los props se agreguen al label */}
            {/* <input id={props.input.id} {...props.input} /> */}
        </div>
    )
}

export default Input;
