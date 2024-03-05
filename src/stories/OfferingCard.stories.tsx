import type {Meta, StoryObj} from "@storybook/react";

import {OfferingCard} from "../components";
import {Coins, Star} from "lucide-react";

const meta = {
    title: "Elements/OfferingCard",
    component: OfferingCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],

    argTypes: {
        color: {
            options: ["primary", "secondary", "default", "success", "danger", "warning", "info", "light", "dark", "white"],
            control: {
                type: "select",
            },
        },
        icon: {
            options: [Coins, Star],
            control: {
                type: "select",
            },
        },
        variant: {
            options: ["light", "dark"],
            control: {
                type: "radio",
            },
        },
        rounded: {
            options: ["sm", "md", "lg", "xl"],
            control: {
                type: "radio",
            },
        },
    },
} satisfies Meta<typeof OfferingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "secondary",
        variant: "light",
        rounded: "xl",
        icon: Coins,
        title: "ბიუჯეტური მოგზაურობა",
        description: "აღმოაჩინეთ ახალი ადგილები ბევრი დანახარჯების გარეშე. ჩვენ გთავაზობთ ბიუჯეტურ და სასიამოვნო მოგზაურობას."
    },
} satisfies Story;

export const WithStarIcon: Story = {
    args: {
        color: "primary",
        variant: "dark",
        rounded: "md",
        icon: Star,
        title: "ბიუჯეტური მოგზაურობა",
        description: "აღმოაჩინეთ ახალი ადგილები ბევრი დანახარჯების გარეშე. ჩვენ გთავაზობთ ბიუჯეტურ და სასიამოვნო მოგზაურობას."
    },
} satisfies Story;

export const WithCustomColor: Story = {
    args: {
        color: "info",
        variant: "light",
        rounded: "lg",
        icon: Coins,
        title: "ბიუჯეტური მოგზაურობა",
        description: "აღმოაჩინეთ ახალი ადგილები ბევრი დანახარჯების გარეშე. ჩვენ გთავაზობთ ბიუჯეტურ და სასიამოვნო მოგზაურობას."
    },
} satisfies Story;