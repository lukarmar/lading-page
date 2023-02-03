/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Heading } from "@chakra-ui/react";
import { MouseEventHandler, useRef } from "react";

import { FlexMotion } from "components/motion/FlexMotion";

import { Navigation } from "./Navigation";
import { useDimensions } from "./use-dimensions";

interface PropsDrawer {
  isOpen: boolean;
  toggle: MouseEventHandler<HTMLHeadingElement> | undefined;
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 60px 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0% at 60px 30px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Drawer = ({ isOpen, toggle }: PropsDrawer) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <FlexMotion
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      pos="relative"
    >
      <FlexMotion
        position="fixed"
        top={0}
        left={0}
        bottom={0}
        w="full"
        h="100vh"
        bgColor="orangeMetacore.main"
        variants={sidebar}
      >
        <Flex w="full" h="full" justify="center" align="center">
          <Navigation isOpen={isOpen} toggle={toggle} />
        </Flex>
      </FlexMotion>
    </FlexMotion>
  );
};
