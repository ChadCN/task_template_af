import type { Meta, StoryObj } from '@storybook/react';
import ConfirmPopupView from './confirmPopupView';

const meta = {
    title: 'Components/ConfirmPopupView',
    component: ConfirmPopupView,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof ConfirmPopupView>;

export default meta;
type Story = StoryObj<typeof ConfirmPopupView>;

export const DeleteConfirm: Story = {
    args: {
        title: 'Delete status',
        message: 'Are you sure you want to delete this status?',
        color: '#F83743',
        onConfirm: () => console.log('Confirmed delete'),
        onCancel: () => console.log('Cancelled delete')
    }
};

export const EditConfirm: Story = {
    args: {
        title: 'Edit status',
        message: 'Are you sure you want to edit this status?',
        color: '#F49C00',
        onConfirm: () => console.log('Confirmed edit'),
        onCancel: () => console.log('Cancelled edit')
    }
};

export const LongMessage: Story = {
    args: {
        title: 'Warning',
        message: 'Beware the statuses are connected to automated workflows and other task types, therefore deleting a status might cause operational issues.',
        color: '#F83743',
        onConfirm: () => console.log('Confirmed'),
        onCancel: () => console.log('Cancelled')
    }
};