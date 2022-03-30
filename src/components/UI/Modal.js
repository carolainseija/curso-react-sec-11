import React from 'react';
import reactDOM from 'react-dom';
import { Fragment } from 'react/cjs/react.production.min';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.Backdrop}></div>
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const portalElements = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {/* {reactDOM.createPortal(<Backdrop />, portalElements)} */}
            {reactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
        </Fragment>
    );
}

export default Modal;