import type {Meta, StoryObj} from "@storybook/react";

import {Input} from "../components";

const meta = {
    title: "Elements/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        color: {
            control: {
                type: "select",
                options: [
                    "primary",
                    "secondary",
                    "success",
                    "danger",
                    "warning",
                    "info",
                    "light",
                    "dark",
                    "default",
                    "white",
                    "black",
                ],
            },
        },
        size: {
            control: {
                type: "select",
                options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
            },
        },
        type: {
            control: {
                type: "select",
                options: ["outline", "solid", "ghost"],
            },
        },
        rounded: {
            control: {
                type: "select",
                options: ["none", "sm", "md", "lg", "xl", "2xl", "full"],
            },
        },
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