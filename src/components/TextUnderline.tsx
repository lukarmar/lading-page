/* eslint-disable import/prefer-default-export */
import { Box, BoxProps } from "@chakra-ui/react";
import {
  Target,
  VariantLabels,
  AnimationControls,
  TargetAndTransition,
} from "framer-motion";
import { ReactNode } from "react";

import { FlexMotion } from "components/motion/FlexMotion";

interface TextUnderlineProps extends BoxProps {
  children: ReactNode;
  colorUnderline?: string;
  animateUnderline?: "left" | "bottom" | "right" | "scale";
}

// MakeCustomValueType<TargetProperties> | VariantLabels | undefined

interface PositionAnimationProps {
  initial: boolean | Target | VariantLabels;
  animate: AnimationControls | TargetAndTransition | VariantLabels | boolean;
}

interface AnimationDirectionProps {
  left: PositionAnimationProps;
  right: PositionAnimationProps;
  bottom: PositionAnimationProps;
  scale: PositionAnimationProps;
}

const TextUnderline = ({
  children,
  colorUnderline = "blue.300",
  animateUnderline,
  ...props
}: TextUnderlineProps) => {
  const animationDirection: AnimationDirectionProps = {
    left: {
      initial: {
        opacity: 0,
        translateX: -150,
      },
      animate: {
        opacity: 1,
        translateX: 0,
        transition: {
          delay: 0.9,
        },
      },
    },
    right: {
      initial: {
        opacity: 0,
        translateX: 150,
      },
      animate: {
        opacity: 1,
        translateX: 0,
        transition: {
          delay: 0.9,
        },
      },
    },
    bottom: {
      initial: {
        opacity: 0,
        translateY: 150,
      },
      animate: {
        opacity: 1,
        translateY: 0,
        transition: {
          delay: 0.9,
        },
      },
    },
    scale: {
      initial: {
        opacity: 0.5,
        scale: 20,
      },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.6,
        },
      },
    },
  };

  return (
    <Box as="span" position="relative" zIndex={10} {...props}>
      <FlexMotion
        w="full"
        h="30%"
        bg={colorUnderline}
        pos="absolute"
        zIndex="-1"
        left={0}
        bottom={0}
        initial={
          animateUnderline
            ? animationDirection[animateUnderline]?.initial
            : { opacity: 1 }
        }
        animate={
          animateUnderline && animationDirection[animateUnderline]?.animate
        }
      />
      {children}
    </Box>
  );
};

export { TextUnderline };
