import { observer } from "mobx-react";
import StatusPickerAddRow from "./statusPickerAddRow/statusPickerAddRow";
import StatusPickerRow from "./statusPickerRow/statusPickerRow";
import { Container, CategoryLabel, StatusGroup } from "./statusPicker.style";
import { Status, TemplateStore } from "../../mobx/templateStore";

interface StatusPickerProps {
    templateStore: TemplateStore;
    onSelection: (status: Status) => void;
}

const StatusPicker: React.FC<StatusPickerProps> = ({ templateStore, onSelection }) => {
    return (
        <Container>
            <CategoryLabel>To Do</CategoryLabel>
            <StatusGroup>
                <StatusPickerAddRow templateStore={templateStore} category={'To do'} />
                {templateStore.todoStatuses.map((status) => (
                    <StatusPickerRow 
                        key={status.id}
                        templateStore={templateStore} 
                        status={status} 
                        onSelection={onSelection} 
                    />
                ))}
            </StatusGroup>

            <CategoryLabel>In Progress</CategoryLabel>
            <StatusGroup>
                <StatusPickerAddRow templateStore={templateStore} category={'In progress'} />
                {templateStore.inProgressStatuses.map((status) => (
                    <StatusPickerRow 
                        key={status.id}
                        templateStore={templateStore} 
                        status={status} 
                        onSelection={onSelection} 
                    />
                ))}
            </StatusGroup>

            <CategoryLabel>Done</CategoryLabel>
            <StatusGroup>
                <StatusPickerAddRow templateStore={templateStore} category={'Done'} />
                {templateStore.doneStatuses.map((status) => (
                    <StatusPickerRow 
                        key={status.id}
                        templateStore={templateStore} 
                        status={status} 
                        onSelection={onSelection} 
                    />
                ))}
            </StatusGroup>
        </Container>
    );
}

export default observer(StatusPicker);