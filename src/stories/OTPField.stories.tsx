import type {Meta, StoryObj} from "@storybook/react";

import {OTPField} from "../components";

const meta = {
    title: "Elements/OTPField",
    component: OTPField,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
            options: [
                "primary",
                "secondary",
                "default",
                "success",
                "danger",
                "warning",
                "info",
                "light",
                "dark",
                "white",
                "black",
            ],
            control: {
                type: "select",
            },
        },
        size: {
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
            control: {
                type: "select",
            },
        },
        type: {
            options: ["solid", "outline", "ghost"],
            control: {
                type: "select",
            },
        },
        rounded: {
            options: ["none", "sm", "md", "lg", "xl", "full"],
            control: {
                type: "select",
            },
        },
    }
} satisfies Meta<typeof OTPField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberInput: Story = {
    args: {
        length: 6,
        onChange: (otp: string) => {
            console.log(otp);
        },
        inputType: "number",
        color: "primary",
        size: "sm",
        type: "outline",
        rounded: "md",
    },
} satisfies Story;

export const TextInput: Story = {
    args: {
        length: 6,
        onChange: (otp: string) => {
            console.log(otp);
        },
        inputType: "text",
        color: "primary",
        size: "sm",
        type: "ghost",
        rounded: "md",
    },
} satisfies Story;

export const PasswordInput: Story = {
    args: {
        length: 6,
        onChange: (otp: string) => {
            console.log(otp);
        },
        inputType: "password",
        color: "primary",
        size: "sm",
        type: "solid",
        rounded: "md",
    },
} satisfies Story;