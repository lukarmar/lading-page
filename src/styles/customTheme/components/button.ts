import { DeepPartial, Theme } from "@chakra-ui/react";

const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    borderRadius: "xl",
    fontWeight: "normal",
    fontSize: "lg",
  },
  sizes: {
    md: {
      w: "full",
      h: 12,
    },
    lg: {
      w: 44,
    },
  },
  variants: {
    ghost: {
      border: "none",
      borderColor: "transparent",
      color: "#fff",
      _hover: { bgColor: "#ffffff24" },
      _active: { bgColor: "#ffffff3b" },
    },
    solid: {
      bg: "orangeMetacore.main",
      color: "#fff",
      _hover: { bg: "orangeMetacore.hover" },
      _active: { bgColor: "orangeMetacore.active" },
    },
  },
  defaultProps: {
    variant: "solid",
  },
};

export default Button;
