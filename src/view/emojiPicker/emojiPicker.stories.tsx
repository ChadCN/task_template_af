import type { Meta, StoryObj } from '@storybook/react';
import EmojiPickerView from './emojiPicker';
import { createMockTemplateStore } from '../../mobx/mockTemplateStore';

const mockStore = createMockTemplateStore();

const meta = {
    title: 'Components/EmojiPickerView',
    component: EmojiPickerView,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '320px',margin: '0 auto' , position: 'relative'}}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof EmojiPickerView>;

export default meta;
type Story = StoryObj<typeof EmojiPickerView>;

export const Default: Story = {
    args: {
        templateStore: mockStore,
        onSelect: (emoji) => console.log('Selected emoji:', emoji)
    }
};