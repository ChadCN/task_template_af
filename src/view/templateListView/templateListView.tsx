import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { TemplateStore, Template } from "../../mobx/templateStore";
import {
    Container,
    Header,
    TopBar,
    ItemCount,
    SearchInput,
    Table,
    Th,
    Td,
    Tr,
    DeleteButton,
    TdWithLeftBorderLine,
    StatusList,
    SearchWrapper,
    SearchIcon,
    HeaderBar,
    CreateButton,
    Checkbox,
    Thead,
    TdWithRightBorderLine,
    EmptyPlaceholder,
    EmptyTitle,
    EmptyText,
    CreateTemplateButton
} from './templateListView.style';
import StatusTagView from "../statusTagView/statusTagView";
import ConfirmPopupView from "../confirmPopupView/confirmPopupView";

interface TemplateListViewProps {
    templateStore: TemplateStore;
}

const TemplateListView: React.FC<TemplateListViewProps> = ({ templateStore }) => {
    const navigate = useNavigate();
    const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);
    const [templateToDelete, setTemplateToDelete] = useState<Template | null>(null);
    const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);

    const HEADER_TITLE_TEXT = 'Task templates';
    const CREATE_BUTTON_TEXT = 'Create template';
    const DELETE_BUTTON_TEXT = 'Delete';
    const SINGLE_COUNT_TEXT = 'item';
    const PLURAL_COUNT_TEXT = 'items';
    const SEARCH_PLACEHOLDER = 'Search templates...';

    const COLUMN_ONE_TITLE = 'Template name';
    const COLUMN_TWO_TITLE = 'Task icon';
    const COLUMN_THREE_TITLE = 'Description';
    const COLUMN_FOUR_TITLE = 'Related statuses';

    const EMPTY_PLACEHOLDER_TITLE = 'Nothing to see';
    const EMPTY_PLACEHOLDER_TEXT = 'No task templates were created.';

    const DELETE_CONFIRMATION_TITLE = 'Delete template';
    const DELETE_CONFIRMATION = 'Are you sure you want to delete this template?';
    const DELETE_CONFIRMATION_COLOR = '#F83743';

    useEffect(() => {
        //todo: fetch templates
    }, []);

    const handleRowClick = (template: Template): void => {
        navigate(`detail/${template.id}`);
    };

    const handleCreateTemplate = (): void => {
        navigate('/new');
    }

    const handleDelete = (template: Template, event: React.MouseEvent): void => {
        event.stopPropagation();
        setTemplateToDelete(template);
        setShowConfirmPopup(true);
    };

    const confirmDelete = async (): Promise<void> => {
        if (templateToDelete) {
            await templateStore.removeTemplate(templateToDelete);
        }
        setShowConfirmPopup(false);
        setTemplateToDelete(null);
    };

    const cancelDelete = (): void => {
        setShowConfirmPopup(false);
        setTemplateToDelete(null);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, templateId: string): void => {
        if (e.target.checked) {
            setSelectedTemplates([...selectedTemplates, templateId]);
        } else {
            setSelectedTemplates(selectedTemplates.filter(id => id !== templateId));
        }
    };

    const getItemText = (count: number): string => {
        return `${count} ${count === 1 ? SINGLE_COUNT_TEXT : PLURAL_COUNT_TEXT}`;
    };

    const headerBar = () => {
        return (
            <HeaderBar>
                <Header>{HEADER_TITLE_TEXT}</Header>
                <CreateButton onClick={handleCreateTemplate}>
                    <GoPlus size={14} />
                    {CREATE_BUTTON_TEXT}
                </CreateButton>
            </HeaderBar>
        );
    };

    const templateTable = () => {
        return (
                <>
                    <TopBar>
                        <ItemCount>{getItemText(templateStore.templatesCount)}</ItemCount>
                        <SearchWrapper>
                            <SearchIcon size={14} />
                            <SearchInput
                                type="text"
                                placeholder={SEARCH_PLACEHOLDER}
                                value={templateStore.templateSearchKey}
                                onChange={(e) => templateStore.templateSearchKey = e.target.value}
                            />
                        </SearchWrapper>
                    </TopBar>
                    <Table>
                        <Thead>
                            <tr>
                                <Th></Th>
                                <Th>{COLUMN_ONE_TITLE}</Th>
                                <Th>{COLUMN_TWO_TITLE}</Th>
                                <Th>{COLUMN_THREE_TITLE}</Th>
                                <Th>{COLUMN_FOUR_TITLE}</Th>
                                <Th></Th>
                            </tr>
                        </Thead>
                        <tbody>
                            {templateStore.filteredTemplates.map(template => (
                                <Tr key={template.id}>
                                    <TdWithRightBorderLine onClick={(e) => e.stopPropagation()}>
                                        <Checkbox
                                            type="checkbox"
                                            checked={selectedTemplates.includes(template.id)}
                                            onChange={(e) => handleCheckboxChange(e, template.id)}
                                        />
                                    </TdWithRightBorderLine>
                                    <Td onClick={() => handleRowClick(template)}>{template.name}</Td>
                                    <Td onClick={() => handleRowClick(template)}>{template.icon}</Td>
                                    <Td onClick={() => handleRowClick(template)}>{template.description}</Td>
                                    <Td onClick={() => handleRowClick(template)}>
                                        <StatusList>
                                            {template.statusIds.map((statusId) => (
                                                <StatusTagView key={statusId} templateStore={templateStore} statusId={statusId} />
                                            ))}
                                        </StatusList>
                                    </Td>
                                    <TdWithLeftBorderLine>
                                        <DeleteButton onClick={(e) => handleDelete(template, e)}>
                                            {DELETE_BUTTON_TEXT}
                                        </DeleteButton>
                                    </TdWithLeftBorderLine>
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </>
                );
    };

    const emptyTable = () => {
        return (
            <EmptyPlaceholder>
                <EmptyTitle>{EMPTY_PLACEHOLDER_TITLE}</EmptyTitle>
                <EmptyText>{EMPTY_PLACEHOLDER_TEXT}</EmptyText>
                <CreateTemplateButton onClick={handleCreateTemplate}>
                    <GoPlus size={14} />
                    {CREATE_BUTTON_TEXT}
                </CreateTemplateButton>
            </EmptyPlaceholder>
        );
    };

    const hasMoreThanOneTemplate = templateStore.filteredTemplates.length > 0;

    return (
        <Container>
            {headerBar()}
            {hasMoreThanOneTemplate ? templateTable() : emptyTable() }
            {showConfirmPopup && (
                <ConfirmPopupView
                    title={DELETE_CONFIRMATION_TITLE}
                    message={DELETE_CONFIRMATION}
                    color={DELETE_CONFIRMATION_COLOR}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </Container>
    );
};

export default observer(TemplateListView);