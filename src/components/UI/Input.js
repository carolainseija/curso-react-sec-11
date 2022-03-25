import React, { Fragment } from 'react';
import Input from '../../UI/Input';

const Inoput = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* ..props.inpu asegura que todo  los props se agreguen al label */}
            <input {...props.input} />
        </div>
    )
}

export default Input;
