import type {Meta, StoryObj} from "@storybook/react";
import NumberSelector from "@/components/NumberSelector";

const meta = {
    title: "Elements/NumberSelector",
    component: NumberSelector,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
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
            control: {
                type: "select",
            },
        },
        size: {
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
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
            options: ["none", "sm", "md", "lg", "xl", "2xl", "full"],
            control: {
                type: "select",
            },
        },
        shadow: {
            options: ["sm", "md", "lg", "xl", "2xl", "inner", "none"],
            control: {
                type: "select",
            },
        },
        onChange: {
            action: "changed",
        },
        min: {
            control: {
                type: "number",
            },
        },
        max: {
            control: {
                type: "number",
            },
        },
        step: {
            control: {
                type: "number",
            },
        },
    }
} satisfies Meta<typeof NumberSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        min: 0,
        max: 10,
        step: 1,
        onChange: (value: number) => console.log(value),
        size: "lg",
        color: "white",
        rounded: "md",
        type: "solid",
        shadow: "md",
    },
} satisfies Story;

export const Primary: Story = {
    args: {
        min: 0,
        max: 10,
        step: 1,
        onChange: (value: number) => console.log(value),
        size: "lg",
        color: "primary",
        rounded: "md",
        type: "solid",
        shadow: "md",
    },
} satisfies Story;

export const Success: Story = {
    args: {
        min: 0,
        max: 10,
        step: 1,
        onChange: (value: number) => console.log(value),
        size: "lg",
        color: "success",
        rounded: "md",
        type: "solid",
        shadow: "md",
    },
} satisfies Story;

export const Rounded: Story = {
    args: {
        min: 0,
        max: 10,
        step: 1,
        onChange: (value: number) => console.log(value),
        size: "lg",
        color: "white",
        rounded: "full",
        type: "solid",
        shadow: "md",
    },
} satisfies Story;

export const Ghost: Story = {
    args: {
        min: 0,
        max: 10,
        step: 1,
        onChange: (value: number) => console.log(value),
        size: "lg",
        color: "primary",
        rounded: "md",
        type: "ghost",
        shadow: "none",
    },
} satisfies Story;

export const Outline: Story = {
    args: {
        min: 0,
        max: 10,
        step: 1,
        onChange: (value: number) => console.log(value),
        size: "lg",
        color: "primary",
        rounded: "md",
        type: "outline",
        shadow: "none",
    },
} satisfies Story;

export const InnerShadow: Story = {
    args: {
        min: 0,
        max: 10,
        step: 1,
        onChange: (value: number) => console.log(value),
        size: "xl",
        color: "primary",
        rounded: "md",
        type: "ghost",
        shadow: "inner",
    },
} satisfies Story;