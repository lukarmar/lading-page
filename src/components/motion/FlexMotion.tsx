/* eslint-disable import/prefer-default-export */
import { chakra, FlexProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";

import { Merge } from "types/merge";

type MotionBoxProps = Merge<FlexProps, HTMLMotionProps<"div">>;

const FlexMotion = motion<FlexProps>(chakra.div);
const FlexMotionCustonMerge: React.FC<MotionBoxProps> = motion(chakra.div);

export { FlexMotion, FlexMotionCustonMerge };
