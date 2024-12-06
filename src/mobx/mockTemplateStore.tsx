// src/mocks/mockTemplateStore.ts
import { makeAutoObservable } from "mobx";
import { Template, Status, Color, TemplateStore } from "../mobx/templateStore";

const mockStatuses: Status[] = [
  { id: 'status1', name: "New", colorId: "color1", category: "To do" },
  { id: 'status2', name: "In Progress", colorId: "color2", category: "In progress" },
  { id: 'status3', name: "This is a very long status name for testing purposes that should extend beyond normal length", colorId: "color3", category: "Done" }
];

const mockColors: Color[] = [
  { id: 'color1', value: "#F83743", name: "Red" },
  { id: 'color2', value: "#11A4FF", name: "Blue" },
  { id: 'color3', value: "#25B861", name: "Green" }
];

const mockEmojis = {
  'Smileys': ['😀', '😃', '😄', '😁', '😅'],
  'Objects': ['📝', '✨', '📌', '🔍', '💡']
};

export const createMockTemplateStore = (): TemplateStore => {
  const store: Partial<TemplateStore> = {
    templates: [],
    statuses: [...mockStatuses],
    colors: [...mockColors],
    emojis: mockEmojis,
    templateSearchKey: '',
    
    get todoStatuses() {
      return this.statuses!.filter(status => status.category === 'To do');
    },
    
    get inProgressStatuses() {
      return this.statuses!.filter(status => status.category === 'In progress');
    },
    
    get doneStatuses() {
      return this.statuses!.filter(status => status.category === 'Done');
    },

    findStatusById(id: string) {
      return this.statuses!.find(status => status.id === id);
    },

    findColorById(id: string) {
      return this.colors!.find(color => color.id === id);
    },

    async updateStatusColor(status: Status, color: Color) {
      const statusToUpdate = this.statuses!.find(s => s.id === status.id);
      if (statusToUpdate) {
        statusToUpdate.colorId = color.id;
      }
    },

    async removeStatus(status: Status) {
      this.statuses = this.statuses!.filter(s => s.id !== status.id);
    },

    async addStatus(name: string, category: string) {
      const newStatus: Status = {
        id: `status${this.statuses!.length + 1}`,
        name,
        colorId: this.colors![0].id,
        category
      };
      this.statuses!.push(newStatus);
    }
  };

  makeAutoObservable(store);
  return store as TemplateStore;
};