import React, { Fragment } from 'react';

const Inoput = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input className={props.input} />
        </div>
    )
}

export default Input;