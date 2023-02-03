/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

import { PropsDataMenuHeader } from "data/dataMenuHeader";
import { useMoveToTef } from "hooks/MoveToRefProvider";
import scrollToRef from "utils/moveScrollForElement";

interface PropsMenuItem extends PropsDataMenuHeader {
  isOpen: boolean;
  toggle: MouseEventHandler<HTMLHeadingElement> | undefined;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ title, isOpen, toggle }: PropsMenuItem) => {
  const { refElements } = useMoveToTef();
  return (
    <motion.li
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: "flex",
        listStyle: "none",
        marginBottom: "20px",
        alignItems: "center",
        justifyItems: "center",
        cursor: "pointer",
      }}
    >
      <Heading color="#fff" fontSize="4xl" onClick={toggle}>
        <Text onClick={() => scrollToRef(refElements[title.toLowerCase()])}>
          {title}
        </Text>
      </Heading>
    </motion.li>
  );
};
