import type {Meta, StoryObj} from "@storybook/react";
import {StatCard} from "../components";
import {BarChart2} from "lucide-react";

const meta = {
    title: "Elements/StatCard",
    component: StatCard,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        color: {
            options: ["primary", "secondary", "dark", "light", "success", "danger", "warning", "info", "white"],
            control: {
                type: "select",
            },
        },
        rounded: {
            options: ["none", "sm", "md", "lg", "xl"],
            control: {
                type: "select",
            },
        },
        shadow: {
            options: ["none", "sm", "md", "lg", "xl"],
            control: {
                type: "select",
            },
        },
        icon: {
            options: [BarChart2],
            control: {
                type: "select",
            },
        }
    },
    tags: ["autodocs"],
} satisfies Meta<typeof StatCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <StatCard {...args} />,
    args: {
        title: "სულ გაყიდვები",
        value: 120,
        icon: BarChart2,
        percent: "+12%",
        status: "increase",
        color: "white",
        rounded: "xl",
        shadow: "xl",
    },
} satisfies Story;

export const Dark: Story = {
    render: (args) => <StatCard {...args} />,
    args: {
        title: "სულ გაყიდვები",
        value: 88,
        icon: BarChart2,
        percent: "-12%",
        status: "decrease",
        color: "dark",
        rounded: "xl",
        shadow: "xl",
    },
} satisfies Story;

export const Colored: Story = {
    render: (args) => <StatCard {...args} />,
    args: {
        title: "სულ გაყიდვები",
        value: 120,
        icon: BarChart2,
        percent: "+12%",
        status: "increase",
        color: "success",
        rounded: "xl",
        shadow: "xl",
    },
} satisfies Story;

export const FourVariant: Story = {
    render: (args) => (
        <div className={"grid grid-cols-2 gap-4"}>
            <StatCard {...args}  />
            <StatCard {...args} status={"decrease"} percent={"8%"} value={"110.4"}/>
            <StatCard {...args} color={"dark"}/>
            <StatCard {...args} status={"decrease"} percent={"8%"} value={"110.4"} color={"warning"} shadow={"none"}/>
        </div>
    ),
    args: {
        title: "სულ გაყიდვები",
        value: 120,
        icon: BarChart2,
        percent: "+12%",
        status: "increase",
        color: "white",
        rounded: "xl",
        shadow: "xl",
    },
} satisfies Story;