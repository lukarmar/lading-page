/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import { IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface PropsMenuToggle {
  isOpen: boolean;
  toggle: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }: PropsMenuToggle) => (
  <IconButton
    variant="ghost"
    aria-label="Open and close drawer"
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        animate={isOpen ? "open" : "closed"}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </IconButton>
);
