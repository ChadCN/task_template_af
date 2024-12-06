import { observer } from "mobx-react";
import { ColorSquare, Label, TagContainer } from "./statusTagView.style";
import { TemplateStore } from "../../mobx/templateStore";

interface StatusTagViewProps {
    templateStore: TemplateStore;
    statusId: string;
}

const StatusTagView: React.FC<StatusTagViewProps> = ({ templateStore, statusId }) => {
    const status = templateStore.findStatusById(statusId);
    if (status === undefined) return <></>;
    
    const color = templateStore.findColorById(status.colorId);
    if (color === undefined) return <></>;
    
    return (
        <TagContainer $bgColor={color.value}>
            <ColorSquare $color={color.value} />
            <Label $color={color.value}>{status.name}</Label>
        </TagContainer>
    );
}

export default observer(StatusTagView);