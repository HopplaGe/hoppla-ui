import type {Meta, StoryObj} from "@storybook/react";
import {OTPField} from "@/components";

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

export const Disabled: Story = {
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
        disabled: true,
    },
} satisfies Story;

export const CustomStyle: Story = {
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
        className: "border-2 border-dashed border-red-500",
    },
} satisfies Story;

export const Autofocus: Story = {
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
        autoFocus: true,
    },
} satisfies Story;

export const CustomLength: Story = {
    args: {
        length: 4,
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

export const CustomSize: Story = {
    args: {
        length: 6,
        onChange: (otp: string) => {
            console.log(otp);
        },
        inputType: "number",
        color: "primary",
        size: "lg",
        type: "outline",
        rounded: "md",
    },
} satisfies Story;

export const CustomColor: Story = {
    args: {
        length: 6,
        onChange: (otp: string) => {
            console.log(otp);
        },
        inputType: "number",
        color: "success",
        size: "sm",
        type: "outline",
        rounded: "md",
    },
} satisfies Story;

export const CustomRounded: Story = {
    args: {
        length: 6,
        onChange: (otp: string) => {
            console.log(otp);
        },
        inputType: "number",
        color: "primary",
        size: "sm",
        type: "outline",
        rounded: "full",
    },
} satisfies Story;

export const CustomType: Story = {
    args: {
        length: 6,
        onChange: (otp: string) => {
            console.log(otp);
        },
        inputType: "number",
        color: "primary",
        size: "sm",
        type: "ghost",
        rounded: "md",
    },
} satisfies Story;

export const CustomClassName: Story = {
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
        className: "bg-lime-500 text-lime-300 border-2 border-solid border-lime-600 hover:bg-lime-600 hover:border-2",
    },
} satisfies Story;

export const CustomOnChange: Story = {
    args: {
        length: 6,
        onChange: (otp: string) => {
            console.log(otp);
            if (otp.length >= 6) {
                alert("OTP is " + otp);
            }
        },
        inputType: "number",
        color: "primary",
        size: "sm",
        type: "outline",
        rounded: "md",
    },
} satisfies Story;

