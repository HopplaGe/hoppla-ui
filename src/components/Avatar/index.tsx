import { cn } from "@/utils";
import { motion } from "framer-motion";
import { forwardRef, RefAttributes } from "react";
import { cva } from "class-variance-authority";

const avatarVariants = {
  hover: {
    scale: 1.05,
    rotateZ: 5,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 1.01,
  },
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
  drag: {
    x: [0, 10, 0, -10, 0],
    transition: { duration: 0.5 },
  },
  spin: {
    rotate: 360,
    transition: { duration: 2, loop: Infinity },
  },
};

const avatarStyle = cva(["font-semibold", "rounded-full", "flex", "bg-cover"], {
  variants: {
    color: {
      primary: ["border-primary", "bg-primary"],
      secondary: ["border-secondary", "bg-secondary"],
      default: ["border-default", "bg-default"],
      success: ["border-success", "bg-success"],
      danger: ["border-danger", "bg-danger"],
      warning: ["border-warning", "bg-warning"],
      light: ["border-light", "bg-light"],
      dark: ["border-dark", "bg-dark"],
    },
    size: {
      xs: ["w-10", "h-10", "p-0.5"],
      sm: ["w-12", "h-12", "p-1"],
      md: ["w-16", "h-16", "p-1.5"],
      lg: ["w-20", "h-20", "p-2"],
      xl: ["w-24", "h-24", "p-2.5"],
      "2xl": ["w-32", "h-32", "p-3"],
      "3xl": ["w-40", "h-40", "p-4"],
      "4xl": ["w-48", "h-48", "p-5"],
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    },
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
    size: "lg",
    rounded: "none",
  },
});

type AvatarProps = {
  src: string;
  onClick?: () => void;
  className?: string;
  color?:
    | "primary"
    | "secondary"
    | "default"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "dark";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  animation?: true | false;
} & typeof avatarStyle;

const Avatar = forwardRef<
  HTMLImageElement,
  AvatarProps & RefAttributes<HTMLImageElement>
>(({ color, size, rounded, className, animation, ...props }, ref) => {
  return (
    <motion.img
      variants={avatarVariants}
      {...(animation && {
        whileHover: "hover",
        whileTap: "tap",
      })}
      {...props}
      className={cn(avatarStyle({ color, size, rounded, className }))}
      ref={ref}
      src={props.src}
    />
  );
});

export default Avatar;
