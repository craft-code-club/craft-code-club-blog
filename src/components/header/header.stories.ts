import type { Meta, StoryObj } from '@storybook/react';
import Header from "@/components/header/header";

const meta = {
  title: 'Layout/Header',
  component: Header
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
