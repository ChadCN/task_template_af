import { observer } from "mobx-react";
import { TemplateStore } from "../../mobx/templateStore";
import { useParams } from "react-router-dom";

interface TemplateDetailViewProps {
    templateStore: TemplateStore;
    editMode: boolean;
}

const TemplateDetailView: React.FC<TemplateDetailViewProps> = ({ templateStore }) => {
    const { templateId } = useParams<{ templateId: string }>();
    
    return (<>Detail View</>);
};

export default observer(TemplateDetailView);