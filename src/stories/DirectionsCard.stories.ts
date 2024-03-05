import type { Meta, StoryObj } from "@storybook/react";

import {DirectionsCard} from "../components";

const meta = {
    title: "Elements/DirectionsCard",
    component: DirectionsCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof DirectionsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "light",
        color: "primary",
        size: "lg",
        rounded: "lg",
        shadow: "md",
        bordered: false,
        animation: true,
        showPriceSection: false,
        from: "ჭავჭავაძის გამზირი 23, თბილისი, საქართველო",
        to: "რუსთაველის ქუჩა 21, ბათუმი, საქართველო",
        startTime: "8:00",
        arrivalTime: "8:30",
        duration: 1800,
        startLatLng: { lat: 44.2541, lng: 41.5246 },
        endLatLng: { lat: 44.3588, lng: 41.5484 },
        fromDistance: 30000,
        toDistance: 500,
        price: 30,
        requested_seats: 4,
        onClick: () => {
            console.log("Clicked");
        },
        className: "",
        classNames: {
            from: "",
            to: "",
            time: "",
            price: "",
        }
    },
    argTypes: {
        variant: {
            options: ["light", "dark"],
            control: {
                type: "select",
            },
        },
        color: {
            options: ["primary", "secondary", "default", "success", "danger", "warning", "light", "dark"],
            control: {
                type: "select",
            },
        },
        size: {
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
            control: {
                type: "select",
            },
        },
        rounded: {
            options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
            control: {
                type: "select",
            },
        },
        shadow:{
            options: ["none", "sm", "md", "lg", "xl", "2xl"],
            control: {
                type: "select",
            }
        },
        bordered: {
            control: {
                type: "boolean",
            },
        },
        animation: {
            control: {
                type: "boolean",
            },
        },
        showPriceSection: {
            control: {
                type: "boolean",
            },
        },
    }
} satisfies Story;
