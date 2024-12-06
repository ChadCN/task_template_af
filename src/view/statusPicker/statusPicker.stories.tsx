import type { Meta, StoryObj } from '@storybook/react';
import StatusPicker from './statusPicker';
import { createMockTemplateStore } from '../../mobx/mockTemplateStore';
import { TemplateStore } from '../../mobx/templateStore';

const mockStore = createMockTemplateStore();

const meta = {
    title: 'Components/StatusPicker',
    component: StatusPicker,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px', margin: '0 auto' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof StatusPicker>;

export default meta;
type Story = StoryObj<typeof StatusPicker>;

export const Default: Story = {
    args: {
        templateStore: mockStore as TemplateStore,
        onSelection: (status) => console.log('Selected status:', status)
    }
};

export const EmptyStatuses: Story = {
    args: {
        templateStore: {
            ...mockStore,
            statuses: [],
            todoStatuses: [],
            inProgressStatuses: [],
            doneStatuses: []
        } as Partial<TemplateStore> as TemplateStore,
        onSelection: (status) => console.log('Selected status:', status)
    }
};