import { observer } from "mobx-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
    Container, 
    HeaderBar,
    Header,
    ButtonGroup,
    SaveButton,
    CancelButton,
    FormContainer,
    FormGroup,
    Label,
    InputWrapper,
    ClearButton,
    Input,
    StatusButtonWrapper,
    StatusButton,
    FakeInputButtonWrapper,
    StatusList, 
    TemplateIconButton,
    TextArea,
    InfoSection,
    TimeInfo,
    IconDeleteButton,
    ActivityLink,
    AddIcon,
    ErrorMessage,
    EmojiList
} from './templateDetailView.style';
import { MdAdd } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { Status, TemplateStore } from "../../mobx/templateStore";
import StatusTagView from "../statusTagView/statusTagView";
import StatusPicker from "../statusPicker/statusPicker";
import EmojiPicker from "../emojiPicker/emojiPicker";
import ConfirmPopupView from "../confirmPopupView/confirmPopupView";


interface TemplateDetailViewProps {
    templateStore: TemplateStore;
    editMode: boolean;
}

const TemplateDetailView: React.FC<TemplateDetailViewProps> = ({ templateStore, editMode}) => {
    const { templateId } = useParams<{ templateId: string }>();
    const navigate = useNavigate();
    const template = templateStore.findTemplateById(templateId || '');

    const [name, setName] = useState<string>(template?.name || "");
    const [nameError, setNameError] = useState<string>('');
    const [statusIds, setStatusIds] = useState<string[]>(template?.statusIds || []);
    const [icon, setIcon] = useState<string>(template?.icon || "");
    const [description, setDescription] = useState<string>(template?.description || "");
    const [descError, setDescError] = useState<string>('');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);

    const VIEW_ACTIVITIES = 'View activities';
    const CANCEL = 'Cancel';
    const CREATE = 'Create';
    const SAVE = 'Save';
    const CREATE_HEADER_TITLE = () => <>Admin <span>/</span> Task templates <span>/</span> <strong>New Task template</strong></>
    const EDIT_HEADER_TITLE = () => <>Admin <span>/</span> Task templates <span>/</span> <strong>Task template view</strong></>
    const CREATED_BY = 'Created by';
    const TEMPLATE_NAME = 'Template name*';
    const STATUS = 'Status';
    const ICON = 'Icon';
    const DESCRIPTION = 'Description';
    const ADD_PLACEHOLDER = 'Add';

    const NAME_ERROR_REQUIRED = 'Required';
    const NAME_MAX_LENGTH = 25;
    const NAME_ERROR_MAX_LENGTH = `Name cannot exceed ${NAME_MAX_LENGTH} characters`;
    const DESC_MAX_LENGTH = 100;
    const DESC_ERROR_MAX_LENGTH = `Description cannot exceed ${DESC_MAX_LENGTH} characters`;

    const DELETE_CONFIRM_COLOR = '#F83743';
    const DELETE_CONFIRM_TITLE = 'Delete task template';
    const DELETE_CONFIRM_MESSAGE = 'Beware the statuses are connected to automated workflows and other task types, therefore delete a task template might cause operational issues.';

    const templateIdIsInvalid = editMode && !template;

    const validateForm = (): boolean => {
        if (!name.trim()) {
            setNameError(NAME_ERROR_REQUIRED);
            return false;
        }
        setNameError('');
        return true;
    };
    
    const handleCreate = async (): Promise<void> => {
        if (!validateForm()) return;
        await templateStore.addTemplate(name, statusIds, icon, description);
        navigate('/');
    };
    
    const handleSave = async (): Promise<void> => {
        if (!validateForm()) return;
        await templateStore.updateTemplate(template!.id, name, statusIds, icon, description);
        navigate('/');
    };

    const handleCancel = (): void => {
        navigate(-1); 
    };

    const handleDelete = (): void => {
        setShowConfirmPopup(true);
    };

    const confirmDelete = async (): Promise<void> => {
        if (template) {
            await templateStore.removeTemplate(template);
        }
        setShowConfirmPopup(false);
        navigate(-1);
    };

    const cancelDelete = (): void => {
        setShowConfirmPopup(false);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= NAME_MAX_LENGTH) {
            setName(value);
            if (value.trim()) {
                setNameError('');
            }
        } else {
            setNameError(NAME_ERROR_MAX_LENGTH);
        }
    };

    const handleStatusSelect = (selectedStatus: Status): void => {
        const newStatusIds = statusIds.find((id) => id === selectedStatus.id) 
            ? statusIds 
            : [...statusIds, selectedStatus.id];
        setStatusIds(newStatusIds);
        setShowDropdown(false);
    };
    
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (value.length <= DESC_MAX_LENGTH) {
            setDescription(value);
            setDescError('');
            e.target.style.height = '32px';
            const scrollHeight = e.target.scrollHeight;
            e.target.style.height = `${Math.max(32, scrollHeight)}px`;
        } else {
            setDescError(DESC_ERROR_MAX_LENGTH);
        }
    };

    const HeaderBarForTemplateCreate = () => {
        return (
            <HeaderBar>
                <Header>{CREATE_HEADER_TITLE()}</Header>
                <ButtonGroup>
                    <CancelButton onClick={handleCancel}>{CANCEL}</CancelButton>
                    <SaveButton onClick={handleCreate}>{CREATE}</SaveButton>
                </ButtonGroup>
            </HeaderBar>
        );
    };

    const HeaderBarForTemplateEdit = () => {
        if (!template) return <></>;
        return (
            <HeaderBar>
            <Header>{EDIT_HEADER_TITLE()}</Header>
            <ButtonGroup>
                <InfoSection>
                    <TimeInfo>
                        <span>
                            {CREATED_BY} {template.createdBy}, {new Date(template.createdAt).toLocaleString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true
                            })}
                        </span>
                        <ActivityLink 
                        onClick={() => navigate(``)}
                        >
                            {VIEW_ACTIVITIES}
                        </ActivityLink>
                    </TimeInfo>
                    <IconDeleteButton onClick={handleDelete}/>
                </InfoSection>
                <CancelButton onClick={handleCancel}>{CANCEL}</CancelButton>
                <SaveButton onClick={handleSave}>{SAVE}</SaveButton>
            </ButtonGroup>
        </HeaderBar>
        );
    };

    const TemplateNameInput = () => {
        return (
            <FormGroup $hasError={!!nameError}>
                <Label>{TEMPLATE_NAME}</Label>
                <InputWrapper>
                    {!name && <AddIcon/>}
                    <Input 
                        value={name}
                        onChange={handleNameChange}
                        placeholder={ADD_PLACEHOLDER}
                        $hasError={!!nameError}
                        // maxLength={MAX_LENGTH}
                    />
                    {name && (
                        <ClearButton onClick={() => setName("")}/>
                    )}
                    {nameError && (
                        <ErrorMessage>
                            <FiAlertTriangle size={12} />
                            {nameError}
                        </ErrorMessage>
                    )}
                </InputWrapper>
            </FormGroup>
        );
    };

    const StatusesInput = () => {
        return (
            <FormGroup>
                <Label>{STATUS}</Label>
                <StatusButtonWrapper>
                    <StatusButton 
                    onClick={() => {
                        setShowEmojiPicker(false);
                        setShowDropdown(!showDropdown);
                    }} 
                    $showDropdown={showDropdown}
                    >
                        {statusIds.length === 0 ? (
                            <FakeInputButtonWrapper>
                                <MdAdd size={16} />
                                <span>{ADD_PLACEHOLDER}</span>
                            </FakeInputButtonWrapper>
                        ) : (
                            statusIds.map((id) => (
                                <StatusTagView key={id} templateStore={templateStore} statusId={id} />
                            ))
                        )}
                    </StatusButton>
                    {statusIds.length > 0 && (
                        <ClearButton onClick={() => setStatusIds([])}/>
                    )}
                    {showDropdown && (
                        <StatusList>
                            <StatusPicker
                                templateStore={templateStore} 
                                onSelection={handleStatusSelect}
                            />
                        </StatusList>
                    )}
                </StatusButtonWrapper>
            </FormGroup>
        );
    };

    const IconInput = (): JSX.Element => {
        return (
            <FormGroup>
                <Label>{ICON}</Label>
                <StatusButtonWrapper>
                    <TemplateIconButton 
                    onClick={(): void => {
                        setShowDropdown(false);
                        setShowEmojiPicker(!showEmojiPicker);
                    }}
                    $showEmojiPicker={showEmojiPicker}
                    >
                        {icon ? (
                            <span>{icon}</span>
                        ) : (
                            <FakeInputButtonWrapper>
                                <MdAdd size={16} />
                                <span>{ADD_PLACEHOLDER}</span>
                            </FakeInputButtonWrapper>
                        )}
                    </TemplateIconButton>
                    {icon && (
                        <ClearButton onClick={()=> setIcon("")}/>
                    )}
                    {showEmojiPicker && (
                        <EmojiList>
                            <EmojiPicker
                                templateStore={templateStore}
                                onSelect={(emoji: string): void => {
                                    setIcon(emoji);
                                    setShowEmojiPicker(false);
                                }}
                            />
                        </EmojiList>

                    )}
                </StatusButtonWrapper>
            </FormGroup>
        );
    };

    const DescriptionInput = () => {
        return (
            <FormGroup $hasError={!!descError}>
                <Label>{DESCRIPTION}</Label>
                <InputWrapper>
                    {!description && <AddIcon/>}
                    <TextArea 
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder={ADD_PLACEHOLDER}
                        $isEmpty={!description}
                        $hasError={!!descError}
                    />
                    {description && <ClearButton onClick={() => setDescription("")}/>}
                    {descError && (
                        <ErrorMessage>
                            <FiAlertTriangle size={12} />
                            {descError}
                        </ErrorMessage>
                    )}
                </InputWrapper>
            </FormGroup>
        );
    };

    if (templateIdIsInvalid) {
        return <div>404</div>;
    }

    return (
        <Container>
            { editMode ? <HeaderBarForTemplateEdit/> : <HeaderBarForTemplateCreate/> }
            <FormContainer>
                { TemplateNameInput() }
                { StatusesInput() }
                { IconInput() }
                { DescriptionInput() }
            </FormContainer>
            { showConfirmPopup && (
                <ConfirmPopupView
                    color={DELETE_CONFIRM_COLOR}
                    title={DELETE_CONFIRM_TITLE}
                    message={DELETE_CONFIRM_MESSAGE}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            ) }
        </Container>
    );
}

export default observer(TemplateDetailView);