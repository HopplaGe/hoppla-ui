import type {Meta, StoryObj} from "@storybook/react";
import {data} from "@/config/listMenu.config.ts";
import {ListMenu} from "@/components";


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
    render: () => (
        <div className="grid grid-cols-1 lg:grid-cols-3 space-x-4">
            <ListMenu color="dark" data={data} rounded="xl"/>
            <ListMenu color="primary" rounded="xl" data={data}/>
            <ListMenu color="warning" rounded="xl" variant="light" data={data}/>
            <ListMenu color="success" rounded="xl" variant="light" data={data}/>
            <ListMenu color="info" rounded="xl" variant="light" data={data}/>
            <ListMenu color="black" rounded="xl" variant="light" data={data}/>
            <ListMenu color="white" data={data} rounded="xl" variant="dark"/>
            <ListMenu color="primary" rounded="xl" data={data} variant="dark"/>
            <ListMenu color="warning" rounded="xl" variant="dark" data={data}/>
            <ListMenu color="success" rounded="xl" variant="dark" data={data}/>
            <ListMenu color="info" rounded="xl" variant="dark" data={data}/>
            <ListMenu color="light" rounded="xl" variant="dark" data={data}/>
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