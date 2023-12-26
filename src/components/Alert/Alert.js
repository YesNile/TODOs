import React, {useState} from 'react';
import {Modal} from "../Modal/Modal";
import {Input, ModalButton} from "../Modal/Modal.styles";

export const Alert = ({modalOpen, onSave, closeModal }) => {
    const [title, setTitle] = useState('');
    const handleSave = () => {
        onSave(title);
        setTitle('');
        closeModal();
    };

    return (
        <>
            {modalOpen && (
                <Modal close={closeModal}>
                    <Input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />
                    <ModalButton onClick={handleSave}>Сохранить</ModalButton>
                </Modal>
            )}
        </>
    );
};