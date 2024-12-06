import type { Meta, StoryObj } from '@storybook/react';
import StatusPickerAddRow from './statusPickerAddRow';
import { createMockTemplateStore } from '../../../mobx/mockTemplateStore';
import { TemplateStore } from '../../../mobx/templateStore';

const mockStore = createMockTemplateStore();

const meta = {
    title: 'Components/StatusPickerAddRow',
    component: StatusPickerAddRow,
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
} satisfies Meta<typeof StatusPickerAddRow>;

export default meta;
type Story = StoryObj<typeof StatusPickerAddRow>;

export const Default: Story = {
    args: {
        templateStore: mockStore as TemplateStore,
        category: 'To do'
    }
};