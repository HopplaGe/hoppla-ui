import type { Meta, StoryObj } from "@storybook/react";
import {Cog, CreditCard, Home, SignpostBig, Star, Ticket} from "lucide-react"

import { ListMenu } from "../components";

const meta = {
    title: "Elements/ListMenu",
    component: ListMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ListMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        style: "light",
        color: "secondary",
        rounded: "lg",
        classNames:{
            base: "",
            item: ""
        },
        data: [
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
        ],
    },
    argTypes: {
        style: {
            control: {
                type: "select",
                options: ["dark", "light"],
            },
        },
        color: {
            control: {
                type: "select",
                options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "white", "black"],
            },
        },
        rounded: {
            control: {
                type: "select",
                options: ["sm", "lg", "xl", "2xl", "3xl", "none"],
            },
        },
    }
} satisfies Story;
