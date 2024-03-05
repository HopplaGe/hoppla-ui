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
    color: "light",
    size: "xs",
    rounded: "md",
    animation: true,
    label: "სახელი",
    type: "solid",
    placeholder: "შეიყვანეთ სრული სახელი",
  },
} satisfies Story;

export const Outline: Story = {
  args: {
    color: "light",
    size: "xs",
    rounded: "md",
    animation: true,
    label: "სახელი",
    type: "outline",
    placeholder: "შეიყვანეთ სრული სახელი",
  },
} satisfies Story;

export const Ghost: Story = {
  args: {
    color: "light",
    size: "xs",
    rounded: "md",
    animation: true,
    label: "სახელი",
    type: "ghost",
    placeholder: "შეიყვანეთ სრული სახელი",
  },
} satisfies Story;