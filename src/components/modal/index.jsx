import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = (props) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);
    const handleClose = () => {
        document.querySelector(".modal").classList.remove("active");
        console.log(document.querySelector(".modal"));
    };
    return (
        <div id={props.id} onClick={handleClose} className={`modal ${active ? "active" : ""}`}>
            {props.children}
        </div>
    );
};
export const ModalContent = (props) => {
    const contentRef = useRef();

    const closeModal = () => {
        if (props.onClose) {
            props.onClose();
        }
        contentRef.current.parentNode.classList.remove("active");
    };

    return (
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    );
};

ModalContent.propTypes = {
    onClose: PropTypes.func,
};

export default Modal;
