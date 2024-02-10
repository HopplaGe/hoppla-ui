import { cn } from "@/utils";
import { motion } from "framer-motion";
import { forwardRef, RefAttributes } from "react";
import { cva } from "class-variance-authority";

const inputVariants = {
  hover: {
    scale: 1,
    // rotateZ: 5,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
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

const inputStyle = cva(
  [
    "font-semibold",
    "rounded-xl",
    "flex",
    "flex-col",
    "gap-0.5",
    "justify-center",
    "items-start",
    "group",
  ],
  {
    variants: {
      color: {
        primary: ["bg-primary", "text-primary", "border-primary"],
        secondary: [
          "bg-secondary",
          "text-secondary",
          "hover:bg-secondary-hover",
        ],
        default: ["bg-default", "text-default", "hover:bg-default-hover"],
        success: ["bg-success", "text-success", "hover:bg-success-hover"],
        danger: ["bg-danger", "text-danger", "hover:bg-danger-hover"],
        warning: ["bg-warning", "text-warning", "hover:bg-warning-hover"],
        info: ["bg-info", "text-info", "hover:bg-info-hover"],
        light: ["bg-light", "text-light", "hover:bg-light-hover"],
        dark: ["bg-dark", "hover:bg-dark-hover", "text-dark"],
      },
      size: {
        xs: ["text-xs"],
        sm: ["text-sm"],
        md: ["text-md"],
        lg: ["text-lg"],
        xl: ["text-xl"],
        "2xl": ["text-2xl"],
        "3xl": ["text-3xl"],
        "4xl": ["text-4xl"],
        "5xl": ["text-5xl"],
      },
      type: {
        solid: ["text-white", "hover:bg-opacity-95", "bg-opacity-100"],
        outline: [
          "bg-transparent",
          "border-2",
          "border-solid",
          "border-current",
          "hover:bg-transparent",
          "hover:border-2",
        ],
        ghost: ["bg-gray-50", "hover:bg-gray-100"],
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
    defaultVariants: {
      color: "primary",
      size: "sm",
    },
  }
);

type InputProps = {
  label: string;
  placeholder?: string;
  onClick?: () => void;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "default";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  type?: "outline" | "solid" | "ghost";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  animation?: true | false;
} & typeof inputStyle;

const Input = forwardRef<
  HTMLInputElement,
  InputProps & RefAttributes<HTMLInputElement>
>(({ color, size, rounded, className, animation, type, ...props }, ref) => {
  return (
    <motion.div
      className={cn(inputStyle({ color, size, type, rounded }), className)}
      variants={inputVariants}
      {...(animation && {
        whileHover: "hover",
        whileTap: "tap",
      })}
      {...props}
    >
      <motion.label className="px-2 py-1 text-xs">{props.label}</motion.label>
      <motion.input
        {...props}
        className="w-full bg-transparent focus:outline-none border-none p-2 pt-0"
        ref={ref}
        placeholder={props.placeholder}
      />
    </motion.div>
  );
});

export default Input;

// <motion.input
//       variants={inputVariants}
//       {...(animation && {
//         whileHover: "hover",
//         whileTap: "tap",
//       })}
//       {...props}
//       className={cn(inputStyle({ color, size, rounded, className }))}
//       ref={ref}
//     />
