// statusPickerRow.tsx
import { observer } from "mobx-react";
import StatusTagView from "../../statusTagView/statusTagView";
import { useState } from "react";
import { MdDragIndicator } from 'react-icons/md';
import {
    Row,
    ButtonGroup,
    ColorButton,
    DeleteButton,
    ColorDropdown,
    ColorOption,
    ColorSquare,
    ColorLabel,
    ColorButtonWrapper,
    TagGroup,
    ColorContent,
    ColorCheckmark
} from './statusPickerRow.style';
import ConfirmPopupView from "../../confirmPopupView/confirmPopupView";
import { TemplateStore, Status, Color } from "../../../mobx/templateStore";

interface StatusPickerRowProps {
    templateStore: TemplateStore;
    status: Status;
    onSelection: (status: Status) => void;
}

const StatusPickerRow: React.FC<StatusPickerRowProps> = ({ templateStore, status, onSelection }) => {
    const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
    const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);
    const [confirmAction, setConfirmAction] = useState<'changeColor' | 'delete' | null>(null);
    const [selectedColor, setSelectedColor] = useState<Color | null>(null);
    const color = templateStore.findColorById(status.colorId);

    const CHANGE_COLOR = 'changeColor';
    const CHANGE_COLOR_CONFIRM_COLOR = '#F49C00';
    const CHANGE_COLOR_CONFIRM_TITLE = 'Edit existing status';
    const CHANGE_COLOR_CONFIRM_MESSAGE = 'Beware the statuses are connected to automated workflows and other task types, therefore edit a status might cause operational issues.';
    const DELETE = 'delete';
    const DELETE_CONFIRM_COLOR = '#F83743';
    const DELETE_CONFIRM_TITLE = 'Delete existing status';
    const DELETE_CONFIRM_MESSAGE = 'Beware the statuses are connected to automated workflows and other task types, therefore deleting a status might cause operational issues.';

    const handleColorSelect = (colorOption: Color, event: React.MouseEvent): void => {
        event.stopPropagation();
        setSelectedColor(colorOption);
        setShowConfirmPopup(true);
        setConfirmAction(CHANGE_COLOR);
        setShowColorPicker(false);
    };

    const handleDeleteClick = (event: React.MouseEvent): void => {
        event.stopPropagation();
        setShowConfirmPopup(true);
        setConfirmAction(DELETE);
    };

    const handleConfirm = async (): Promise<void> => {
        if (confirmAction === CHANGE_COLOR && selectedColor) {
            await templateStore.updateStatusColor(status, selectedColor);
        } else if (confirmAction === DELETE) {
            await templateStore.removeStatus(status);
        }
        setShowConfirmPopup(false);
        setConfirmAction(null);
        setSelectedColor(null);
    };

    const handleCancel = (): void => {
        setShowConfirmPopup(false);
        setConfirmAction(null);
        setSelectedColor(null);
    };

    if (!color) return null;

    return (
        <Row onClick={() => onSelection(status)}>
            <TagGroup>
                <MdDragIndicator size={16}/>
                <StatusTagView templateStore={templateStore} statusId={status.id} />
            </TagGroup>

            <ButtonGroup>
                <ColorButtonWrapper>
                    <ColorButton 
                        color={color.value}
                        onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            setShowColorPicker(!showColorPicker);
                        }}
                    />
                    {showColorPicker && (
                        <ColorDropdown>
                            {templateStore.colors.map((colorOption) => (
                                <ColorOption
                                    key={colorOption.id}
                                    onClick={(e) => handleColorSelect(colorOption, e)}
                                    $isSelected={colorOption.id === status.colorId}
                                >
                                    <ColorContent>
                                        <ColorSquare color={colorOption.value} />
                                        <ColorLabel>{colorOption.name}</ColorLabel>
                                    </ColorContent>
                                    {colorOption.id === status.colorId && (
                                        <ColorCheckmark size={12} />
                                    )}
                                </ColorOption>
                            ))}
                        </ColorDropdown>
                    )}
                </ColorButtonWrapper>
                <DeleteButton onClick={handleDeleteClick} />
            </ButtonGroup>

            {showConfirmPopup && (
                <ConfirmPopupView
                    title={confirmAction === CHANGE_COLOR ? CHANGE_COLOR_CONFIRM_TITLE : DELETE_CONFIRM_TITLE}
                    message={confirmAction === CHANGE_COLOR ? CHANGE_COLOR_CONFIRM_MESSAGE : DELETE_CONFIRM_MESSAGE}
                    color={confirmAction === CHANGE_COLOR ? CHANGE_COLOR_CONFIRM_COLOR : DELETE_CONFIRM_COLOR}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </Row>
    );
};

export default observer(StatusPickerRow);