import { observer } from "mobx-react";
import { TemplateStore } from "../../mobx/templateStore";

interface TemplateListViewProps {
    templateStore: TemplateStore;
}

const TemplateListView: React.FC<TemplateListViewProps> = ({ templateStore }) => {

    return (<>List View</>);
};

export default observer(TemplateListView);