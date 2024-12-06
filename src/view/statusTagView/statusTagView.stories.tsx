import type { Meta, StoryObj } from '@storybook/react';
import StatusTagView from './statusTagView';
import { TemplateStore, Status } from '../../mobx/templateStore';
import { createMockTemplateStore } from '../../mobx/mockTemplateStore';

const mockTemplateStore = createMockTemplateStore();

const meta = {
  title: 'Components/StatusTagView',
  component: StatusTagView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatusTagView>;

export default meta;
type Story = StoryObj<typeof StatusTagView>;

export const Default: Story = {
  args: {
    templateStore: mockTemplateStore as TemplateStore,
    statusId:'status1'
  },
};

export const BlueStatus: Story = {
  args: {
    templateStore: mockTemplateStore,
    statusId: 'status2'
  },
};


export const LongTextStatus: Story = {
  args: {
    templateStore: mockTemplateStore,
    statusId: 'status3'
  },
};