/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/prefer-default-export */
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

import { dataMenuHeader } from "data/dataMenuHeader";

import { MenuItem } from "./MenuItem";

interface PropsNavigation {
  isOpen: boolean;
  toggle: MouseEventHandler<HTMLHeadingElement> | undefined;
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const Navigation = ({ isOpen, toggle }: PropsNavigation) => (
  <Flex w="full" h="full" justify="center" align="center" position="absolute">
    <motion.ul animate={isOpen ? "open" : "closed"} variants={variants}>
      {dataMenuHeader.map((dataMenu) => (
        <MenuItem
          key={dataMenu.title}
          {...dataMenu}
          isOpen={isOpen}
          toggle={toggle}
        />
      ))}
    </motion.ul>
  </Flex>
);
