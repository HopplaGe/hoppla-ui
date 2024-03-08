import type {Meta, StoryObj} from "@storybook/react";
import InfoSection from "@/components/InfoSection";

const meta = {
    title: "Elements/InfoSection",
    component: InfoSection,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof InfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const White: Story = {
    args: {
        href: "https://www.hoppla.ge",
        color: "white",
        variant: "light",
        description: "დაზოგე საწვავის გადასახადი ჰოპლას დახმარებით! გამოაქვეყნე მგზავრობა და დაიწყე მოგზაურობა. სხვებთან ერთად მგზავრობისას შენი მოგზაურობა იქნება სასიამოვნო და ბიუჯეტური.",
        linkText: "გაიგე მეტი",
        img: "https://www.hoppla.ge/carpool/startdriving.svg",
        title: "დაზოგე თანხა მოგზაურობისას",
        colored: true,
        turned: false,
    },
} satisfies Story;

export const DefaultTurned: Story = {
    args: {
        href: "https://www.hoppla.ge",
        color: "default",
        variant: "light",
        description: "Hoppla გთავაზობს კომფორთული და იაფ მგზავრობას ავტობუსით. ჩვენი ავტობუსები არიან სასიამოვნო და ბიუჯეტური მგზავრობის საშუალება.",
        linkText: "გაიგე მეტი",
        img: "https://www.hoppla.ge/buses/buswaiting.svg",
        title: "ისიამოვნე კომფორტულად ავტობუსით",
        colored: true,
        turned: true,
    },
} satisfies Story;

export const InfoColored: Story = {
    args: {
        href: "https://www.hoppla.ge",
        color: "info",
        variant: "light",
        description: "Hoppla გთავაზობს სანდო სერვისს და სასიამოვნო მგზავრობას. ჩვენი მძღოლები არიან გამოცდილები და გთავაზობენ სასიამოვნო მგზავრობას ყოველ ჯერზე.",
        linkText: "გაიგე მეტი",
        img: "https://www.hoppla.ge/buses/reliable.svg",
        title: "სანდო სერვისი",
        colored: true,
        turned: false,
    },
} satisfies Story;