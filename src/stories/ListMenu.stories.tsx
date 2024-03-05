import type { Meta, StoryObj } from "@storybook/react";
import { Cog, CreditCard, Home, SignpostBig, Star, Ticket } from "lucide-react"
import { ListMenu } from "../components";

const data = [
    {
        name: "მთავარი",
        description: "პირადი კაბინეტი",
        href: "#",
        icon: Home,
        category: "ნავიგაცია"
    },
    {
        name: "მგზავრობები",
        description: "მგზავრობების მართვა",
        href: "#",
        icon: SignpostBig,
        category: "ნავიგაცია"
    },
    {
        name: "ბილეთები",
        description: "ბილეთების მართვა",
        href: "#2",
        icon: Ticket,
        category: "ნავიგაცია"
    },
    {
        name: "შეფასებები",
        description: "შეფასებების მართვა",
        href: "#2",
        icon: Star,
        category: "ნავიგაცია"
    },
    {
        name: "გადახდები",
        description: "გადახდების მართვა",
        href: "#2",
        icon: CreditCard,
        category: "მართვა"
    },
    {
        name: "პარამეტრები",
        description: "პარამეტრების მართვა",
        href: "#2",
        icon: Cog,
        category: "მართვა"
    }
]


const meta = {
    title: "Elements/ListMenu",
    component: ListMenu,
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
            options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "white", "black"],
            control: {
                type: "select",
            },
        },
        rounded: {
            control: {
                type: "select",
                options: ["sm", "lg", "xl", "2xl", "3xl", "none"],
            },
        },
    }
} satisfies Meta<typeof ListMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllMenus: Story = {
    render: (args) => (
        <div className="flex flex-row space-x-4">
            <ListMenu {...args} />
            <ListMenu {...args} variant="dark" />
        </div>
    )
} satisfies Story;

export const Default: Story = {
    args: {
        variant: "light",
        color: "dark",
        rounded: "lg",
        classNames: {
            base: "",
            item: ""
        },
        data: data
    }
} satisfies Story;

export const Dark: Story = {
    args: {
        variant: "dark",
        color: "light",
        rounded: "lg",
        classNames: {
            base: "",
            item: ""
        },
        data: data
    }
} satisfies Story;

export const Primary: Story = {
    args: {
        variant: "light",
        color: "primary",
        rounded: "lg",
        classNames: {
            base: "",
            item: ""
        },
        data: data
    }
} satisfies Story;