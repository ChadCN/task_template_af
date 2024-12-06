import type { Meta, StoryObj } from '@storybook/react';
import StatusPickerRow from './statusPickerRow';
import { createMockTemplateStore } from '../../../mobx/mockTemplateStore';
import { TemplateStore } from '../../../mobx/templateStore';

const mockStore = createMockTemplateStore();

const meta = {
    title: 'Components/StatusPickerRow',
    component: StatusPickerRow,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px', height: '50px', margin: '0 auto' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof StatusPickerRow>;

export default meta;
type Story = StoryObj<typeof StatusPickerRow>;

export const Default: Story = {
    args: {
      templateStore: mockStore as TemplateStore,
      status: mockStore.statuses?.[0],
      onSelection: () => console.log('Status selected')
    },
  };

export const DifferentStatus: Story = {
    args: {
        templateStore: mockStore as TemplateStore,
        status: mockStore.statuses?.[1],
        onSelection: () => console.log('Status selected')
    },
};

export const LongStatusName: Story = {
    args: {
        templateStore: mockStore as TemplateStore,
        status: mockStore.statuses?.[2],
        onSelection: () => console.log('Status selected')
    },
};