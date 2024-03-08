import type {Meta, StoryObj} from "@storybook/react";
import {Logo} from "@/components";

const meta = {
    title: "Elements/Logo",
    component: Logo,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            options: ["light", "dark"],
            control: {
                type: "select",
            },
        },
        color: {
            options: [
                "primary",
                "secondary",
                "light",
                "dark",
                "info",
                "warning",
                "danger",
                "success",
                "white",
                "black",
            ],
            control: {
                type: "select",
            },
        },
        size: {
            options: ["sm", "lg"],
            control: {
                type: "select",
            },
        },
    }
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        variant: "dark",
        color: "primary",
        size: "lg",
        onClick: () => console.log("clicked"),
    },
} satisfies Story;

export const Small: Story = {
    args: {
        color: "primary",
        size: "sm",
        onClick: () => console.log("clicked"),
    },
} satisfies Story;