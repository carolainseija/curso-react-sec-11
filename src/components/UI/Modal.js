import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.modal}>
        <div className={classes.content}></div>
    </div>
}

const Modal = props => {

    return (
       <Fragment>
           <Backdrop />
           <ModalOverlay>{props.chiuldren}</ModalOverlay>
       </Fragment>>
    )
}

export default Modal;