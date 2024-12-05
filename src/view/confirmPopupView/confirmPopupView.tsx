import React from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import {
    Overlay,
    PopupContainer,
    Title,
    Message,
    ButtonGroup,
    ConfirmButton,
    CancelButton
} from './confirmPopupView.style';

interface ConfirmPopupViewProps {
    title: string;
    message: string;
    color: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmPopupView: React.FC<ConfirmPopupViewProps> = ({ 
    title, 
    message, 
    color, 
    onConfirm, 
    onCancel 
}) => {
    const handleClickBackground = (event: React.MouseEvent): void => {
        event.stopPropagation();
    };

    return (
        <Overlay onClick={onCancel}>
            <PopupContainer onClick={handleClickBackground}>
                <Title><FiAlertTriangle color={color}/>{title}</Title>
                <Message>{message}</Message>
                <ButtonGroup>
                    <CancelButton onClick={onCancel}>Cancel</CancelButton>
                    <ConfirmButton onClick={onConfirm} color={color}>
                        Yes, Proceed
                    </ConfirmButton>
                </ButtonGroup>
            </PopupContainer>
        </Overlay>
    );
};

export default ConfirmPopupView;