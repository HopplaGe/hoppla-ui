import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";

const meta = {
  title: "Elements/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    startContent: { control: "text" },
    endContent: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    label: "ღილაკი",
    size: "sm",
    type: "solid",
    color: "primary",
    animation: true,
  },
};

export const Outline: Story = {
  args: {
    label: "ღილაკი",
    size: "sm",
    type: "outline",
    color: "primary",
    animation: true,
    endContent: "🚀",
  },
  parameters: {
    backgrounds: {
      default: "red",
    },
  },
};

export const Ghost: Story = {
  args: {
    label: "ღილაკი",
    size: "sm",
    type: "ghost",
    color: "primary",
    animation: true,
  },
};

export const Link: Story = {
  args: {
    label: "ღილაკი",
    size: "sm",
    type: "link",
    color: "primary",
    animation: true,
    startContent: "🚀",
  },
};
