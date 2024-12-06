import React, { useState } from 'react';
import { observer } from "mobx-react";
import { FaCheck, FaTimes } from 'react-icons/fa';
import {
    Container,
    AddIcon,
    Input,
    ButtonGroup,
    IconButton
} from './statusPickerAddRow.style';
import { TemplateStore } from '../../../mobx/templateStore';

interface StatusPickerAddRowProps {
    templateStore: TemplateStore;
    category: string;
}

const StatusPickerAddRow: React.FC<StatusPickerAddRowProps> = ({ templateStore, category }) => {
    const [newStatus, setNewStatus] = useState<string>("");

    const ADD_NEW_PLACEHOLDER = 'Add new';

    const handleCreate = (): void => {
        if (newStatus.trim()) {
            templateStore.addStatus(newStatus, category);
            setNewStatus("");
        }
    };

    const handleClear = (): void => {
        setNewStatus("");
    };

    return (
        <Container>
            <AddIcon/>
            <Input
                type="text"
                placeholder={ADD_NEW_PLACEHOLDER}
                value={newStatus}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewStatus(e.target.value)}
            />
            {newStatus && (
                <ButtonGroup>
                    <IconButton $isCreate onClick={handleCreate}>
                        <FaCheck size={14} />
                    </IconButton>
                    <IconButton onClick={handleClear}>
                        <FaTimes size={14} />
                    </IconButton>
                </ButtonGroup>
            )}
        </Container>
    );
}

export default observer(StatusPickerAddRow);