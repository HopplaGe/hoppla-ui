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
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/39017636?v=4",
    size: "xs",
    color: "primary",
    animation: true,
    rounded: "none",
  },
  argTypes: {},
};
