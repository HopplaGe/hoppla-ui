import {forwardRef, RefAttributes} from "react";
import {motion} from "framer-motion";
import {cn} from "@/utils";
import {cva} from "class-variance-authority";

const logoVariants = {
    hover: {
        scale: 1.05,
        rotateZ: 5,
        transition: {duration: 0.2},
    },
    tap: {
        scale: 1.01,
    },
    hidden: {opacity: 0, x: "100vw"},
    visible: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.2},
    },
    drag: {
        x: [0, 10, 0, -10, 0],
        transition: {duration: 0.5},
    },
    spin: {
        rotate: 360,
        transition: {duration: 2, loop: Infinity},
    },
};

const logoStyle = cva([""], {
    variants: {
        color: {
            primary: ["fill-primary", "fill-primary-dark"],
            secondary: ["fill-secondary", "fill-secondary-dark"],
            default: ["fill-default", "fill-default-dark"],
            success: ["fill-success", "fill-success-dark"],
            danger: ["fill-danger", "fill-danger-dark"],
            warning: ["fill-warning", "fill-warning-dark"],
            info: ["fill-info", "fill-info-dark"],
            light: ["fill-light", "fill-light-dark"],
            dark: ["fill-dark", "fill-dark-dark"],
            white: ["fill-white", "fill-gray-100"],
        },
        variant: {
            light: ["fill-light"],
            dark: ["fill-[#2A2B28]"],
        }
    },
    // compoundVariants: [
    //   {
    //     color: "primary",
    //     size: "sm",
    //     className: "uppercase",
    //   },
    // ],
    defaultVariants: {
        color: "primary",
    },
});

export type LogoProps = {
    onClick?: () => void;
    className?: string;
    variant?: "light" | "dark";
    color?:
        | "primary"
        | "secondary"
        | "default"
        | "success"
        | "danger"
        | "warning"
        | "light"
        | "dark";
    size?: "sm" | "lg";
    animation?: true | false;
} & typeof logoStyle;

const Logo = forwardRef<
    SVGSVGElement,
    LogoProps & RefAttributes<SVGSVGElement>
>(({variant, color, size, className, animation, ...props}, ref) => {

    const darkColor = logoStyle({color}).substring(logoStyle({color}).indexOf(' ') + 14);
    const lightColor = logoStyle({color}).substring(logoStyle({color}).indexOf(' ') + 1, logoStyle({color}).indexOf(' ') + 13);

    return (
        <motion.svg
            ref={ref}
            variants={logoVariants}
            version="1.1"
            id="Layer_2_00000168812582402984552350000005909834527639658628_"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox={
                size === "lg"
                    ? "0 0 756 274.6"
                    : "0 0 257.57 191.63"
            }
            className={cn(
                size === "lg" ? "w-52 h-24" : "w-24 h-24",
                logoStyle({color}), className)
            }
            {...props}
            {...(animation && {
                whileHover: "hover",
                whileTap: "tap"
            })}
        >
            <g id="Layer_2-2">
                {
                    size === "lg" ? (
                        <g>
                            <>
                                <path className={cn("st0", logoStyle({variant}))} d="M135.5,120.8c0,33.2,0,66.4,0,99.7c0,1.6-0.5,2.8-2,3.6c-0.5,0.2-1,0.3-1.6,0.3c-7.2,0-14.4,0.1-21.6,0
			c-3.6,0-7.2-0.8-10.2-2.9c-3.3-2.2-5.7-5-7-8.8c-0.8-2.3-1.1-4.6-1.1-7c0-20.8,0-41.6,0-62.4c0-0.2,0-0.5,0-0.7
			c0-1.1-0.1-1.1-1.2-1.1c-0.2,0-0.5,0-0.7,0c-14.8,0-29.6,0-44.5,0c-2,0-1.9-0.1-1.9,1.9c0,25.7,0,51.3,0,77c0,0.6,0.1,1.3-0.1,1.9
			c-0.5,1.3-1.5,2-2.9,2.2c-0.4,0.1-0.8,0-1.2,0c-6.5,0-13,0-19.4,0c-2.4,0-4.7-0.2-6.9-0.7c-2.1-0.5-4.1-1.5-5.8-2.9
			c-2.4-1.9-4.3-4.1-5.5-6.9c-1-2.3-1.5-4.8-1.7-7.3c0-0.4,0-0.8,0-1.2C0,148.9,0,92.4,0,36c0-3.9,0.8-7.5,3-10.8
			c2.1-3.2,5-5.6,8.7-6.9c2.6-0.9,5.3-1.2,8-1.2c6.7,0,13.4,0,20,0c0.8,0,1.7,0.1,2.4,0.6c0.9,0.6,1.5,1.5,1.5,2.7c0,0.3,0,0.7,0,1
			c0,24.8,0,49.7,0,74.5c0,0.2,0,0.3,0,0.4c0,1.4,0,1.4,1.5,1.4c9,0,18,0,27,0c5.9,0,11.9,0,17.8,0c2,0,1.9,0.1,1.9-1.9
			c0-20.1,0-40.2,0-60.3c0-3.6,0.8-7,2.7-10.1c2.2-3.4,5.1-5.8,8.9-7.1c2.5-0.9,5-1.2,7.6-1.2c6.8,0,13.7,0,20.5,0
			c0.9,0,1.7,0.1,2.4,0.6c0.9,0.6,1.4,1.4,1.4,2.6c0,0.3,0,0.7,0,1C135.5,54.4,135.5,87.6,135.5,120.8L135.5,120.8z"/>
                                <path className={cn("st0", logoStyle({variant}))} d="M737.3,224.2c-5.6,0-11.2-0.1-16.8,0c-1.6,0-2.7-0.5-3.5-1.9c-0.8-1.4-2.1-2.3-3.2-3.4
			c-0.6-0.6-1.3-0.1-1.9,0.1c-1.7,0.7-3.4,1.3-5.2,1.9c-4.1,1.3-8.3,2.2-12.6,2.7c-3.8,0.5-7.7,0.7-11.5,0.5
			c-2.8-0.2-5.6-0.5-8.4-0.9c-3-0.5-5.9-1.2-8.8-2c-2.2-0.6-4.4-1.5-6.6-2.4c-4.4-1.8-8.5-4.1-12.4-6.7c-2.8-1.9-5.5-4-8-6.3
			c-5-4.5-9.2-9.6-12.7-15.4c-2.2-3.7-4.1-7.6-5.7-11.6c-1.1-2.8-1.9-5.6-2.6-8.5c-0.8-3.5-1.5-7.1-1.7-10.8
			c-0.2-2.2-0.4-4.5-0.3-6.7c0.2-4,0.5-8.1,1.3-12c1.1-5.4,2.7-10.6,5-15.6c2.2-4.8,4.8-9.2,7.9-13.4c3.6-4.8,7.8-9.1,12.5-12.8
			c4.2-3.3,8.7-6.2,13.6-8.5c3.4-1.6,6.9-3,10.6-4c1.9-0.5,3.8-1.1,5.8-1.4c1.8-0.3,3.5-0.8,5.3-0.8c1.7-0.1,3.3-0.4,4.9-0.5
			c3.7-0.2,7.4,0,11.1,0.4c3.5,0.4,6.9,1,10.3,1.9c3.5,0.9,6.9,2.2,10.3,3.6c4.8,2.1,9.2,4.7,13.3,7.8c3.9,2.9,7.5,6.2,10.8,9.8
			c3.1,3.5,5.9,7.3,8.2,11.3c2.8,4.7,5,9.8,6.6,15c1.4,4.7,2.3,9.5,2.7,14.4c0.3,3.2,0.5,6.4,0.3,9.6c-0.1,0.9,0.2,1.8,0.2,2.8
			c0,20.7,0,41.4,0,62.1c0,0.3,0,0.6,0,0.9c0,0.6-0.3,0.8-0.9,0.8C749.2,224.3,743.2,224.3,737.3,224.2L737.3,224.2L737.3,224.2z
			 M658.9,153.5c-0.8,13.6,10.9,28.3,28.8,27.2c12.3-0.8,25.6-11.3,24.7-28.6c-0.6-12.1-10.9-25.9-29-24.9
			C670.4,128,658.7,139.5,658.9,153.5L658.9,153.5z"/>
                                <path className={cn("st0", logoStyle({variant}))} d="M214.7,224.2c-40-0.4-70.6-32.6-70.1-71c0.5-39.3,32.4-69.9,71.1-69.3c39.3,0.6,69.6,32.3,69.3,70.6
			C284.7,194.4,252.5,224.1,214.7,224.2L214.7,224.2z M188.1,154c-0.6,13.3,11,27.8,28.9,26.8c12.1-0.7,25.5-11.2,24.6-28.5
			c-0.5-11.3-10.1-25.9-28.9-25C200.2,127.9,187.7,139.1,188.1,154L188.1,154z"/>
                                <path className={cn("st0", logoStyle({variant}))} d="M605.1,116.5c0,34.6,0,69.1,0,103.7c0,0.7,0.1,1.5-0.2,2.1c-0.8,1.4-1.9,2-3.5,2c-6.7,0-13.5,0-20.2,0
			c-1.2,0-2.4,0-3.6-0.2c-6.8-0.8-11.8-4.4-14.6-10.6c-0.9-2.1-1.4-4.3-1.4-6.6c0-16.4,0-32.7,0-49.1c0-1.8,0.1-3.5,0.2-5.2
			c0.1-1.1-0.2-2.3-0.2-3.5c0-43.7,0-87.5,0-131.2c0-6,2.5-10.9,7.5-14.4c1.8-1.3,3.9-2.1,6.1-2.7c2.2-0.6,4.3-0.6,6.5-0.6
			c3.9,0,7.8-0.1,11.7,0c5.3,0.2,9.8,3.4,11.2,8.6c0.4,1.4,0.6,2.8,0.6,4.3C605.1,47.5,605.1,82,605.1,116.5L605.1,116.5z"/>
                            </>

                            <path className={cn("st0", lightColor)} d="M294.8,274.5c0-1.8,0-3.6,0-5.4c0-4.4,0.1-8.9,0.1-13.3c0-14.6,0-29.2,0-43.8c0-7.2,0-14.4,0-21.6
			c0-7.4,0-14.7,0-22c0-5.7-0.1-11.5,0-17.2c0-2.1,0.2-4.2,0.5-6.4c0.3-2.3,0.6-4.6,1.1-6.9c0.8-3.6,2-7.1,3.3-10.5
			c2-5.2,4.5-10,7.7-14.5c2.4-3.2,4.9-6.4,7.8-9.2c2.2-2.2,4.5-4.1,6.9-6c3.1-2.5,6.5-4.6,10-6.4c1.2-0.7,2.5-1.4,3.7-1.9
			c1.9-0.8,3.8-1.6,5.8-2.3c2.2-0.7,4.3-1.4,6.5-2c2.7-0.7,5.4-1.1,8.1-1.4c4.1-0.5,8.1-0.8,12.2-0.5c3.1,0.2,6.3,0.4,9.4,1.2
			c1.4,0.3,2.9,0.6,4.4,0.9c1.9,0.3,3.7,1.1,5.6,1.7c4.3,1.4,8.3,3.3,12.2,5.5c2.1,1.2,4.1,2.6,6.1,4c2.6,1.8,5,3.9,7.3,6
			c4,3.8,7.6,8.1,10.6,12.8c2.3,3.5,4.3,7.3,5.9,11.2c1.3,3.1,2.4,6.2,3.1,9.5c0.5,2.2,1.1,4.4,1.4,6.7c0.6,3.7,1.1,7.5,0.8,11.3
			c-0.2,1.7,0.2,3.5,0,5.2c-0.6,5-1.3,9.9-2.9,14.7c-1.7,5.2-3.8,10.3-6.7,15c-1.2,2.1-2.5,4.2-3.9,6.1c-1.4,1.9-3,3.5-4.5,5.4
			c-1.5,1.8-3.4,3.2-4.9,5c-0.4,0.4-0.9,0.7-1.4,1.1c-2.7,2.1-5.4,4.3-8.3,6.1c-2.7,1.7-5.5,3-8.2,4.7c-3.2,2-6.5,3.7-9.7,5.6
			c-2.2,1.4-4.6,2.4-6.8,3.9c-1.7,1.1-3.6,1.9-5.3,3.1c-1.7,1.2-3.6,2.1-5.4,3.1c-2.6,1.5-5.1,3-7.7,4.4c-2.7,1.5-5.4,3.1-8.1,4.7
			c-2.3,1.3-4.5,2.6-6.8,3.9c-2.1,1.2-4.3,2.5-6.5,3.7c-2.4,1.3-4.8,2.7-7.2,4.1c-1.9,1.1-3.9,2.2-5.8,3.3c-2.9,1.7-5.7,3.5-8.7,5.1
			c-2.7,1.5-5.2,3.2-7.9,4.6c-1.4,0.7-2.6,1.6-4,2.4c-3,1.7-5.9,3.5-8.9,5.2C295.8,274.5,295.5,274.7,294.8,274.5L294.8,274.5z
			 M361.4,109.3c-8.5,0.2-19,4.4-27.7,13.1c-8.7,8.8-12.8,19.5-12.7,31.8c0,5.7,1.3,11.3,3.6,16.6c2.4,5.5,5.7,10.4,10.1,14.4
			c5.8,5.4,12.6,9.1,20.3,11c3.4,0.9,7,1.3,10.5,1.2c11.6-0.3,21.9-4.2,30.4-12.4c9.5-9.1,14-20.4,13.5-33.5
			C408.3,128.7,389.8,109.3,361.4,109.3L361.4,109.3z"/>
                            <path className={cn(
                                lightColor,
                                "st1",
                            )} d="M442.3,133.2c-0.8-0.9-0.8-2.1-1.1-3.2c-0.7-2.4-1.5-4.8-2.5-7.2c-1.3-3.1-2.7-6.2-4.4-9.1
			c-1.3-2.2-2.5-4.4-4.1-6.4c-0.6-0.7-0.6-1.1,0.1-1.8c2-2.1,4-4.3,6.4-6c1.2-0.9,2.2-1.9,3.4-2.8c2.4-1.8,5-3.3,7.6-4.9
			c1.1-0.7,2.4-1.1,3.5-1.8c1.5-0.9,3.1-1.5,4.7-2.1c2.5-1,5-1.8,7.6-2.5c2.5-0.7,5.1-1.3,7.6-1.6c2.4-0.3,4.7-0.7,7.1-0.8
			c2.1-0.1,4.3-0.3,6.4-0.1c3.5,0.2,7.1,0.4,10.5,1.3c1.4,0.3,2.9,0.7,4.4,0.9c1.9,0.3,3.7,1.2,5.6,1.7c4.1,1.3,8,3.3,11.8,5.2
			c2.2,1.2,4.3,2.7,6.3,4.2c2.6,1.8,5,3.9,7.3,6c2.9,2.8,5.6,5.8,8,9c3.2,4.3,5.9,9,8,13.9c1.3,3.1,2.5,6.2,3.4,9.4
			c0.8,3.1,1.6,6.2,1.8,9.4c0.1,1.1,0.4,2.1,0.5,3.2c0.3,2.7,0,5.4,0.2,8.1c0.2,4.2-0.7,8.2-1.4,12.3c-0.4,2.4-1,4.8-2,7
			c-0.3,0.7-0.5,1.4-0.7,2.1c-1.8,5.8-4.8,10.9-8,16c-1.7,2.7-3.8,5-5.8,7.4c-1.5,1.8-3.5,3.3-5,5.1c-0.3,0.4-0.8,0.6-1.2,1
			c-2.7,2.1-5.4,4.3-8.4,6.2c-1.6,1.1-3.4,1.9-5,2.9c-3.3,1.9-6.5,3.8-9.8,5.7c-3.3,1.8-6.5,3.8-9.8,5.7c-1.7,1-3.5,1.9-5.1,3
			c-2.9,1.8-5.9,3.4-8.8,5.1c-1.1,0.6-2.1,1.2-3.1,1.9c-2.7,1.6-5.4,3.2-8.1,4.8c-2.7,1.6-5.3,3.1-8,4.6c-2.3,1.3-4.6,2.6-7,3.9
			c-2.3,1.3-4.5,2.6-6.8,3.9c-1.5,0.9-3,1.7-4.5,2.6c-3.2,1.9-6.4,3.8-9.7,5.6c-2.7,1.5-5.2,3.2-8,4.6c-1.4,0.7-2.6,1.6-4,2.4
			c-2.9,1.7-5.8,3.4-8.8,5.1c-1.1,0.6-1.3,0.5-1.3-0.8c0-8.7,0-17.4,0-26.1c0-9.3,0-18.6,0-27.9c0-1.1,0.3-1.9,1.3-2.5
			c1-0.7,2-1.4,2.8-2.3c0.5-0.6,1.3-1,2-1.5c0.8-0.5,1.5-1.1,2.1-1.7c1.9-2.1,3.8-4.1,5.7-6.2c1.3-1.5,2.4-3.1,3.6-4.6
			c2.1-2.5,3.5-5.5,5.3-8.2c0.8-1.3,1.7-2.7,2.3-4.2c1-2.4,2.4-4.8,2.9-7.4c0.3-1.4,1.1-2.6,1.5-3.9c0.2-0.8,0.2-1.6,0.6-2.4
			c0.2-0.5,0.2-1,0.5-1.5c0.8,0.8,1.2,1.9,1.7,2.8c1.3,2.5,3,4.7,4.9,6.8c1.6,1.8,3.2,3.6,5.2,5c2.2,1.5,4.2,3.2,6.6,4.4
			c1.6,0.8,3.3,1.6,5,2.3c1.6,0.7,3.2,1.5,4.9,1.5c0.2,0,0.5,0.1,0.7,0.2c0.6,0.4,1.3,0.4,1.9,0.6c2.8,0.6,5.7,0.6,8.6,0.9
			c0.2,0,0.5,0,0.7,0c0.9-0.4,1.8-0.2,2.8-0.2c1.4,0,2.8-0.3,4.2-0.5c2.8-0.4,5.4-1.3,8-2.2c1.7-0.6,3.3-1.4,4.9-2.2
			c1.5-0.8,3-1.8,4.5-2.7c2-1.1,3.6-2.8,5.3-4.3c1.8-1.6,3.4-3.5,4.9-5.4c2-2.5,3.7-5.2,5-8.2c1-2.4,1.8-4.8,2.5-7.3
			c0.9-2.9,1.3-6,1.4-9c0.1-2.9-0.1-5.8-0.5-8.7c-0.6-4.1-1.7-8-3.5-11.7c-1.6-3.6-3.5-7-6.1-10c-1.9-2.2-3.8-4.3-6-6.1
			c-3-2.4-6.2-4.4-9.7-6c-2-0.9-4-1.5-6.1-2.1c-1-0.3-2-0.4-3-0.7c-2.3-0.7-4.6-1-7-1c-3-0.1-6,0-9,0.5c-2.8,0.4-5.6,1.2-8.2,2.1
			c-3.7,1.3-7.1,3.1-10.3,5.4c-0.6,0.4-1.2,0.5-1.7,1.1c-2,2-4.1,3.8-6,5.9c-2.2,2.6-4.3,5.3-5.9,8.3
			C442.9,132.9,442.8,133.3,442.3,133.2L442.3,133.2z"/>

                            <path className={cn(
                                darkColor,
                                "",
                            )} d="M442.3,133.2c0.5,0,0.6-0.4,0.8-0.7c1.6-3,3.7-5.7,5.9-8.3c1.9-2.2,4-3.9,6-5.9c0.5-0.5,1.2-0.7,1.7-1.1
			c3.2-2.2,6.6-4.1,10.3-5.4c2.7-0.9,5.4-1.7,8.2-2.1c3-0.4,6-0.5,9-0.5c2.4,0,4.7,0.3,7,1c1,0.3,2,0.4,3,0.7
			c2.1,0.6,4.1,1.2,6.1,2.1c3.5,1.6,6.8,3.6,9.7,6c2.2,1.8,4.2,3.9,6,6.1c2.6,3,4.5,6.4,6.1,10c1.7,3.7,2.9,7.6,3.5,11.7
			c0.4,2.9,0.6,5.8,0.5,8.7c-0.1,3-0.5,6.1-1.4,9c-0.8,2.5-1.5,4.9-2.5,7.3c-1.3,2.9-3,5.6-5,8.2c-1.5,1.9-3,3.8-4.9,5.4
			c-1.7,1.5-3.3,3.1-5.3,4.3c-1.5,0.8-2.9,1.9-4.5,2.7c-1.6,0.8-3.2,1.6-4.9,2.2c-2.6,0.9-5.2,1.9-8,2.2c-1.4,0.2-2.8,0.5-4.2,0.5
			c-0.9,0-1.9-0.1-2.8,0.2c-0.2,0.1-0.5,0.1-0.7,0c-2.9-0.3-5.8-0.3-8.6-0.9c-0.6-0.1-1.4-0.2-1.9-0.6c-0.2-0.1-0.4-0.2-0.7-0.2
			c-1.8-0.1-3.3-0.9-4.9-1.5c-1.7-0.7-3.4-1.5-5-2.3c-2.4-1.2-4.5-2.9-6.6-4.4c-2-1.4-3.6-3.2-5.2-5c-1.9-2.1-3.6-4.3-4.9-6.8
			c-0.5-0.9-0.9-2-1.7-2.8c-0.2-0.8,0.3-1.4,0.4-2.1c0.8-3.3,1-6.6,1.6-9.9c0.4-1.9,0.1-3.9,0.2-5.8c0.1-2.9,0-5.8-0.3-8.7
			c-0.3-2.8-0.7-5.6-1.3-8.3C442.8,136.5,442.2,134.9,442.3,133.2L442.3,133.2z M482.7,180c4.8,0,8.8-1.4,12.6-3.4
			c1.6-0.8,2.9-1.9,4.2-3.1c2.1-1.7,3.9-3.7,5.2-6c1.8-3,3-6.2,3.7-9.8c0.6-3.4,0.5-6.8-0.2-10.1c-0.4-2.3-1.2-4.6-2.4-6.6
			c-2.5-4.5-5.8-8.3-10.5-10.9c-2.2-1.2-4.5-2.3-7-2.8c-1.7-0.3-3.4-0.7-5.2-0.7c-1.1,0-2.2,0.1-3.3,0.1c-2.3,0-4.6,0.6-6.7,1.3
			c-3.4,1.2-6.5,3-9.2,5.5c-3.3,3-5.6,6.5-7.1,10.7c-0.9,2.6-1.4,5.2-1.5,8c-0.2,3.2,0.5,6.4,1.3,9.4c0.4,1.6,1.3,3,2,4.5
			c1.1,2.4,2.8,4.3,4.6,6.1c1.3,1.3,2.8,2.5,4.4,3.6c2.2,1.5,4.5,2.4,7,3.1C477.3,179.8,480.2,180.2,482.7,180L482.7,180z"/>
                            <path className={cn(
                                darkColor,
                                "",
                            )} d="M361.4,109.3c28.4,0,47,19.4,47.8,42.4c0.5,13.1-4,24.4-13.5,33.5c-8.5,8.1-18.8,12-30.4,12.4
			c-3.5,0.1-7-0.4-10.5-1.2c-7.7-1.9-14.5-5.6-20.3-11c-4.4-4-7.7-9-10.1-14.4c-2.3-5.3-3.6-10.9-3.6-16.6c0-12.2,4-23,12.7-31.8
			C342.3,113.7,352.9,109.5,361.4,109.3L361.4,109.3z M366,179.9c15-0.6,26.2-12.4,25.9-27.3c-0.4-14-11.8-27.5-29.7-25.8
			c-12.8,1.2-23.9,11.8-23.7,26.7C338.6,168.6,350.9,180.4,366,179.9L366,179.9z"/>
                        </g>
                    ) : (
                        <>
                            <g id="Layer_2-2" data-name="Layer 2-2">
                                <path className={cn(
                                    lightColor,
                                    "st1",
                                )}
                                      d="M0,191.51v-5.38c.02-4.43.08-8.85.08-13.28,0-14.61,0-29.22,0-43.83v-21.61c0-7.35.04-14.69.04-22.04,0-5.74-.09-11.48-.04-17.23.02-2.12.23-4.24.53-6.36.33-2.3.62-4.6,1.12-6.86.79-3.6,1.96-7.08,3.28-10.53,1.97-5.16,4.47-10.04,7.73-14.48,2.38-3.24,4.9-6.39,7.79-9.24,2.18-2.16,4.5-4.14,6.9-6.03,3.12-2.47,6.49-4.57,10.03-6.42,1.24-.65,2.48-1.4,3.74-1.92,1.9-.79,3.81-1.63,5.78-2.26,2.17-.69,4.32-1.45,6.53-2,2.67-.66,5.39-1.09,8.13-1.42,4.06-.49,8.13-.79,12.22-.52,3.14.21,6.28.44,9.38,1.19,1.43.35,2.91.64,4.38.89,1.92.32,3.71,1.13,5.56,1.72,4.26,1.37,8.27,3.33,12.18,5.47,2.12,1.16,4.09,2.6,6.08,3.98,2.59,1.81,4.99,3.87,7.29,6.04,4.05,3.82,7.57,8.07,10.6,12.75,2.3,3.54,4.26,7.27,5.89,11.15,1.29,3.06,2.35,6.23,3.15,9.48.55,2.22,1.07,4.44,1.41,6.69.56,3.74,1.12,7.49.77,11.3-.16,1.74.17,3.5-.04,5.24-.59,4.97-1.31,9.93-2.85,14.71-1.69,5.24-3.84,10.28-6.67,15.02-1.25,2.09-2.51,4.17-3.93,6.13-1.36,1.88-3.03,3.54-4.48,5.36-1.46,1.84-3.36,3.23-4.85,5.03-.36.44-.89.73-1.35,1.09-2.72,2.1-5.37,4.27-8.29,6.11-2.67,1.69-5.54,3-8.22,4.67-3.17,1.97-6.49,3.7-9.68,5.65-2.23,1.36-4.63,2.45-6.81,3.88-1.71,1.12-3.57,1.95-5.27,3.1-1.71,1.16-3.59,2.1-5.4,3.14-2.57,1.48-5.1,3.01-7.69,4.45-2.72,1.51-5.38,3.11-8.07,4.66-2.26,1.3-4.51,2.64-6.76,3.95-2.13,1.25-4.29,2.47-6.45,3.68-2.41,1.34-4.79,2.74-7.17,4.13-1.93,1.13-3.9,2.18-5.8,3.34-2.86,1.74-5.73,3.45-8.67,5.06-2.68,1.47-5.18,3.24-7.94,4.58-1.39.67-2.65,1.62-3.99,2.4-2.96,1.74-5.92,3.45-8.89,5.17-.29.17-.58.37-1.27.22v-.02h0ZM66.54,26.31c-8.45.2-19.03,4.42-27.69,13.14-8.72,8.78-12.75,19.52-12.7,31.77.02,5.74,1.32,11.33,3.59,16.62,2.36,5.48,5.69,10.4,10.06,14.44,5.79,5.36,12.59,9.06,20.3,11.01,3.44.87,6.96,1.33,10.45,1.23,11.63-.32,21.92-4.22,30.38-12.35,9.48-9.13,13.96-20.41,13.45-33.5-.88-22.9-19.44-42.32-47.83-42.35h-.01,0Z"/>
                                <path className={cn(
                                    lightColor,
                                    "st1",
                                )}
                                      d="M147.46,50.28c-.81-.92-.8-2.15-1.13-3.24-.73-2.42-1.5-4.81-2.45-7.15-1.26-3.12-2.69-6.15-4.4-9.05-1.28-2.17-2.51-4.38-4.09-6.36-.57-.72-.58-1.07.13-1.78,2.05-2.07,4-4.26,6.36-5.99,1.18-.86,2.19-1.9,3.37-2.76,2.44-1.77,5-3.34,7.56-4.91,1.11-.68,2.38-1.11,3.49-1.79,1.5-.91,3.15-1.5,4.74-2.14,2.46-.98,4.99-1.81,7.56-2.52,2.52-.7,5.06-1.31,7.63-1.64,2.35-.3,4.7-.68,7.09-.75,2.13-.06,4.27-.28,6.41-.14,3.53.22,7.06.4,10.54,1.26,1.43.35,2.91.65,4.38.89,1.93.32,3.7,1.16,5.56,1.73,4.15,1.28,7.99,3.26,11.81,5.24,2.23,1.15,4.26,2.7,6.32,4.15,2.59,1.81,4.99,3.86,7.29,6.03,2.94,2.78,5.6,5.79,8.03,9.04,3.23,4.33,5.87,8.98,8.05,13.92,1.35,3.06,2.51,6.19,3.38,9.4.84,3.08,1.6,6.2,1.82,9.41.07,1.06.36,2.1.48,3.17.3,2.72.05,5.43.16,8.14.16,4.17-.71,8.22-1.39,12.28-.4,2.37-1,4.76-1.95,7.01-.28.67-.5,1.37-.71,2.06-1.82,5.77-4.85,10.92-8.05,15.98-1.69,2.68-3.84,5-5.85,7.43-1.52,1.84-3.45,3.27-4.96,5.12-.33.4-.83.65-1.25.98-2.74,2.14-5.44,4.33-8.39,6.21-1.64,1.05-3.39,1.87-5.05,2.85-3.26,1.93-6.53,3.83-9.84,5.67-3.3,1.84-6.52,3.82-9.82,5.67-1.72.97-3.46,1.94-5.15,3-2.86,1.82-5.89,3.37-8.84,5.05-1.06.6-2.09,1.24-3.14,1.86-2.72,1.61-5.42,3.24-8.15,4.82-2.68,1.55-5.34,3.14-8.04,4.63-2.33,1.29-4.65,2.63-6.96,3.95-2.26,1.3-4.52,2.61-6.78,3.93-1.51.88-3.03,1.74-4.53,2.62-3.23,1.88-6.41,3.84-9.68,5.62-2.68,1.46-5.18,3.24-7.95,4.57-1.39.67-2.65,1.62-3.99,2.4-2.91,1.71-5.84,3.4-8.76,5.1-1.09.64-1.27.53-1.27-.78-.01-8.71-.02-17.42-.02-26.13,0-9.3.03-18.6,0-27.9,0-1.13.29-1.88,1.27-2.54.99-.67,1.99-1.36,2.8-2.31.52-.61,1.3-1.01,1.99-1.46.77-.51,1.51-1.05,2.14-1.74,1.89-2.09,3.84-4.13,5.69-6.25,1.28-1.47,2.39-3.07,3.64-4.56,2.11-2.51,3.53-5.46,5.26-8.21.84-1.34,1.73-2.73,2.34-4.16,1.04-2.44,2.41-4.77,2.92-7.41.27-1.4,1.1-2.55,1.47-3.92.21-.78.23-1.62.56-2.38.21-.48.24-1.04.52-1.51.84.77,1.22,1.85,1.72,2.8,1.32,2.52,3.04,4.73,4.93,6.8,1.63,1.78,3.24,3.6,5.25,5,2.19,1.53,4.24,3.25,6.65,4.44,1.64.81,3.3,1.59,5,2.28,1.61.66,3.16,1.46,4.94,1.54.23,0,.48.11.67.24.59.4,1.28.45,1.93.59,2.83.59,5.73.62,8.6.89.24.02.51.04.72-.04.9-.35,1.83-.22,2.75-.24,1.41-.02,2.78-.31,4.17-.49,2.76-.35,5.36-1.31,7.96-2.2,1.67-.58,3.27-1.37,4.85-2.18,1.55-.79,2.97-1.83,4.48-2.67,2.03-1.13,3.59-2.78,5.31-4.26,1.84-1.58,3.36-3.5,4.87-5.4,2-2.51,3.68-5.22,4.98-8.16,1.05-2.36,1.78-4.82,2.54-7.28.91-2.94,1.27-5.96,1.41-9,.13-2.9-.09-5.79-.48-8.7-.56-4.11-1.74-7.99-3.46-11.73-1.64-3.57-3.55-6.96-6.14-9.96-1.88-2.18-3.83-4.32-6.05-6.1-2.98-2.39-6.23-4.42-9.74-6-1.97-.89-4.01-1.54-6.08-2.14-.98-.28-2-.38-2.95-.67-2.29-.71-4.64-.97-7-1.01-3-.05-5.99.03-9,.48-2.84.43-5.57,1.17-8.23,2.1-3.68,1.28-7.12,3.14-10.32,5.39-.56.39-1.22.54-1.72,1.05-1.95,2.02-4.15,3.78-6,5.93-2.23,2.59-4.29,5.26-5.91,8.26-.18.33-.3.75-.8.74h-.02,0Z"/>
                                <path className={cn(
                                    darkColor,
                                    "",
                                )}
                                      d="M147.46,50.28c.5,0,.62-.41.8-.74,1.62-3,3.68-5.67,5.91-8.26,1.85-2.15,4.05-3.91,6-5.93.5-.52,1.16-.66,1.72-1.05,3.2-2.25,6.64-4.11,10.32-5.39,2.66-.93,5.39-1.67,8.23-2.1,3.01-.45,5.99-.53,9-.48,2.37.04,4.71.3,7,1.01.95.29,1.97.39,2.95.67,2.07.6,4.11,1.25,6.08,2.14,3.51,1.58,6.77,3.62,9.74,6,2.22,1.78,4.17,3.92,6.05,6.1,2.58,3,4.5,6.4,6.14,9.96,1.72,3.74,2.9,7.62,3.46,11.73.4,2.91.62,5.79.48,8.7-.14,3.04-.5,6.06-1.41,9-.76,2.46-1.49,4.92-2.54,7.28-1.3,2.94-2.98,5.64-4.98,8.16-1.51,1.9-3.03,3.82-4.87,5.4-1.72,1.47-3.27,3.12-5.31,4.26-1.51.84-2.93,1.88-4.48,2.67-1.58.81-3.18,1.6-4.85,2.18-2.6.9-5.2,1.85-7.96,2.2-1.39.18-2.76.47-4.17.49-.92,0-1.85-.11-2.75.24-.22.08-.48.06-.72.04-2.87-.27-5.77-.3-8.6-.89-.65-.14-1.35-.18-1.93-.59-.19-.13-.44-.23-.67-.24-1.79-.09-3.33-.89-4.94-1.54-1.7-.7-3.36-1.47-5-2.28-2.41-1.19-4.46-2.91-6.65-4.44-2.01-1.4-3.62-3.22-5.25-5-1.9-2.07-3.61-4.28-4.93-6.8-.5-.95-.88-2.04-1.72-2.8-.18-.77.27-1.42.43-2.12.75-3.26,1.03-6.6,1.65-9.88.36-1.88.09-3.88.18-5.82.13-2.91.03-5.82-.28-8.71-.3-2.79-.67-5.57-1.29-8.32-.36-1.59-.95-3.16-.83-4.85h-.01ZM187.83,97.01c4.78-.04,8.78-1.45,12.62-3.4,1.56-.79,2.9-1.93,4.24-3.06,2.07-1.73,3.86-3.68,5.24-6,1.81-3.04,3.01-6.25,3.66-9.77.64-3.43.45-6.79-.18-10.12-.44-2.3-1.25-4.58-2.42-6.65-2.54-4.51-5.84-8.31-10.45-10.85-2.22-1.22-4.5-2.29-6.99-2.76-1.7-.32-3.4-.73-5.17-.7-1.11.02-2.22.09-3.34.08-2.32-.02-4.56.56-6.68,1.31-3.39,1.2-6.45,3.03-9.16,5.49-3.29,2.98-5.64,6.54-7.11,10.67-.92,2.56-1.35,5.24-1.53,7.98-.21,3.25.47,6.35,1.33,9.41.44,1.55,1.26,3,1.98,4.47,1.15,2.35,2.84,4.28,4.61,6.09,1.3,1.33,2.77,2.53,4.35,3.6,2.16,1.47,4.55,2.41,6.96,3.15,2.7.83,5.55,1.27,8.03,1.05h0,0Z"/>
                                <path className={cn(
                                    darkColor,
                                    "",
                                )}
                                      d="M66.54,26.31c28.39.02,46.95,19.45,47.83,42.35.5,13.09-3.97,24.38-13.45,33.5-8.45,8.14-18.75,12.03-30.38,12.35-3.49.1-7.01-.37-10.45-1.23-7.71-1.95-14.5-5.65-20.3-11.01-4.37-4.04-7.7-8.96-10.06-14.44-2.27-5.29-3.57-10.87-3.59-16.62-.04-12.25,3.98-22.99,12.7-31.77,8.66-8.72,19.24-12.95,27.69-13.14h0ZM71.18,96.97c15-.58,26.23-12.43,25.86-27.3-.35-14.02-11.79-27.47-29.73-25.83-12.75,1.16-23.94,11.79-23.73,26.73.21,15.1,12.49,26.89,27.6,26.4h0Z"/>
                            </g>
                        </>
                    )
                }
            </g>
        </motion.svg>
    );
});

export default Logo;