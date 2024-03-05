import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../components";

const meta = {
  title: "Elements/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    src: { control: "text" },
    onClick: { action: "clicked" },
    className: { control: "text" },

    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "default",
          "success",
          "danger",
          "warning",
          "light",
          "dark",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
      },
    },
    rounded: {
      control: {
        type: "select",
        options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
      },
    },
    animation: { control: "boolean" },
    bordered: { control: "boolean" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/39017636?v=4",
    alt: "Profile Picture",
    size: "sm",
    color: "secondary",
    animation: true,
    rounded: "xl",
    bordered: false,
  },
  argTypes: {},
};

export const Bordered: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/39017636?v=4",
    alt: "Profile Picture",
    size: "xs",
    color: "primary",
    animation: true,
    rounded: "lg",
    bordered: true,
  },
  argTypes: {},
};