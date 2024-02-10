import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../components";

const meta = {
  title: "Elements/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    color: "primary",
    size: "md",
    rounded: "md",
    animation: true,
    label: "Solid",
    type: "solid",
    placeholder: "Solid Input",
  },
} satisfies Story;
