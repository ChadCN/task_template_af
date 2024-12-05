import { Color, Status, Template } from "../mobx/templateStore";

class TemplateApi {
    fetchTemplates = async (): Promise<Template[]> => [];
    addTemplate = (_template: Template): void => {};
    removeTemplate = (_template: Template): void => {};
    editTemplate = (_template: Template): void => {};
    fetchStatuses = async (): Promise<Status[]> => [];
    addStatus = (_status: Status): void => {};
    removeStatus = (_status: Status): void => {};
    editStatus = (_status: Status): void => {};
    fetchColors = async (): Promise<Color[]> => [];
}

export default TemplateApi;