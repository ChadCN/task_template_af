import { makeAutoObservable, runInAction } from "mobx";
import TemplateApi from "../api/templateApi";

interface Template {
    id: string;
    name: string;
    icon: string;
    description: string;
    statusIds: string[];
    createdAt: string;
    createdBy: string;
}

interface Status {
    id: string;
    name: string;
    colorId: string;
    category: string;
}

interface Color {
    id: string;
    value: string;
    name: string;
}

interface EmojiCategory {
    [key: string]: string[];
}

class TemplateStore {
    private api: TemplateApi;
    
    constructor(templateApi: TemplateApi) {
        makeAutoObservable(this);
        this.api = templateApi;
    }

    templates: Template[] = [
        {
            id: "1",
            name: "Template 1",
            icon: "🌚",
            description: "Description 1",
            statusIds: ['status1', 'status2', 'status3', 'status4', 'status5'],
            createdAt: "2021-09-01",
            createdBy: "Chad",
        },
        {
            id: "2",
            name: "Template 2",
            icon: "📺",
            description: "Description 2",
            statusIds: ['status1', 'status2', 'status3', 'status4', 'status5'],
            createdAt: "2021-09-02",
            createdBy: "Chad",
        },
    ];

    statuses: Status[] = [
        { id: 'status1', name: "To do", colorId: "colorId1", category: "To do" },
        { id: 'status2', name: "Pending", colorId: "colorId2", category: "To do" },
        { id: 'status3', name: "In Progress", colorId: "colorId3", category: "In progress" },
        { id: 'status4', name: "Done", colorId: "colorId4", category: "Done" },
        { id: 'status5', name: "Cancelled", colorId: "colorId5", category: "Done" },
    ];

    colors: Color[] = [
        {id: 'colorId1', value: "#ADAEBA", name: "Grey" },
        {id: 'colorId2', value: "#25B861", name: "Green" },
        {id: 'colorId3', value: "#11A4FF", name: "Blue" },
        {id: 'colorId4', value: "#FF7457", name: "Orange" },
        {id: 'colorId5', value: "#F83743", name: "Red" }
    ];

    emojis: EmojiCategory = {
        'People': ['👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👩‍🦰', '👨‍🦰', '👩‍🦱', '👨‍🦱', '👩‍🦲', '👨‍🦲', '👱‍♀️', '👱‍♂️', '👴', '👵', '🧓', '👨‍🦳', '👩‍🦳', '👨‍🦰', '👩‍🦰', '👨‍🌾', '👩‍🌾', '👨‍🍳'],
        'Animals': ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🦄', '🐔', '🐧', '🐦', '🦅', '🦉', '🐺', '🐗', '🐴', '🦓'],
    };

    templateSearchKey = "";

    get filteredTemplates(): Template[] {
        if (!this.templateSearchKey) {
            return this.templates;
        }
        return this.templates.filter(template => template.name.includes(this.templateSearchKey));
    }

    get templatesCount(): number {
        return this.filteredTemplates.length;
    }

    get todoStatuses(): Status[] {
        return this.statuses.filter(status => status.category === "To do");
    }

    get inProgressStatuses(): Status[] {
        return this.statuses.filter(status => status.category === "In progress");
    }

    get doneStatuses(): Status[] {
        return this.statuses.filter(status => status.category === "Done");
    }

    fetchTemplates = async (): Promise<void> => {
        const templates = await this.api.fetchTemplates();
        runInAction(() => {
            this.templates = templates;
        });
    }

    findTemplateById = (id: string): Template | undefined => {
        return this.templates.find(template => template.id === id);
    }

    addTemplate = async (name: string, statusIds: string[], icon: string, description: string): Promise<void> => {
        this.templates.push({
            id: `${this.templates.length + 1}`,
            name,
            statusIds,
            icon,
            description,
            createdAt: new Date().toISOString(),
            createdBy: "Chad",
        });
    }

    removeTemplate = async (template: Template): Promise<void> => {
        this.templates = this.templates.filter(t => t !== template);
    }

    updateTemplate = async (id: string, name: string, statusIds: string[], icon: string, description: string): Promise<void> => {
        const template = this.findTemplateById(id);
        if (template) {
            template.name = name;
            template.statusIds = statusIds;
            template.icon = icon;
            template.description = description;
        }
    }

    fetchStatuses = async (): Promise<void> => {
        const statuses = await this.api.fetchStatuses();
        runInAction(() => {
            this.statuses = statuses;
        });
    }

    findStatusById = (id: string): Status | undefined => {
        return this.statuses.find(status => status.id === id);
    }

    addStatus = async (name: string, category: string): Promise<void> => {
        this.statuses.push({ id: `status${this.statuses.length + 1}`, name, colorId: "colorId1", category: category });
    }

    removeStatus = async (status: Status): Promise<void> => {
        this.statuses = this.statuses.filter(s => s !== status);
    }

    updateStatusColor = async (status: Status, color: Color): Promise<void> => {
        status.colorId = color.id;
    }

    fetchColors = async (): Promise<void> => {
        const colors = await this.api.fetchColors();
        runInAction(() => {
            this.colors = colors;
        });
    }

    findColorById = (id: string): Color | undefined => {
        return this.colors.find(color => color.id === id);
    }

}

const templateApi = new TemplateApi();
const templateStore = new TemplateStore(templateApi);

export { templateStore, TemplateStore, TemplateApi };
export type { Template, Status, Color, EmojiCategory };
