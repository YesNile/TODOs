import React, {useState} from 'react';
import {Backdrop, Input, ModalButton, ModalWrapper} from "./Modal.styles";

export const Modal = ({ close, children }) => {
    const contentComponentClickHandle = (event) => {
        event.stopPropagation();
    };

    return (
        <Backdrop onClick={close}>
            <ModalWrapper onClick={contentComponentClickHandle}>
                {children}
            </ModalWrapper>
        </Backdrop>
    );
};