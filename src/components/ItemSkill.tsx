/* eslint-disable import/prefer-default-export */
import {
  Stack,
  Icon,
  Text,
  Flex,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { IconType } from "react-icons";
import { useInView } from "react-intersection-observer";

import { FlexMotion } from "components/motion/FlexMotion";

export interface StepsProps {
  title: string;
  text: string;
  icon: IconType | string;
  bgColor: string;
}

interface PropsdataItemSkill {
  dataItemSkill: StepsProps;
  index: number;
}

const ItemSkill = ({ dataItemSkill, index }: PropsdataItemSkill) => {
  const animation = useAnimation();
  const isMediumView = useBreakpointValue({ base: true, md: false });
  const [contentRef, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    animation.start(inView ? "visible" : "hidden");
  }, [animation, inView]);

  return (
    <FlexMotion
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: isMediumView ? 0 : index * 0.2,
            type: "spring",
            bounce: 0.5,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0,
        },
      }}
    >
      <Stack
        textAlign={{ base: "left", md: "center" }}
        align={{ base: "center", md: "center" }}
        spacing={4}
        key={dataItemSkill.title}
        maxW={{ base: "full", md: "xs" }}
        mt={{ base: 10, md: 0 }}
        _first={{
          mt: 0,
        }}
        px={4}
      >
        <Flex
          w={28}
          h={28}
          bg={dataItemSkill.bgColor}
          color="grayMetacore.main"
          fontWeight={700}
          align="center"
          justify="center"
          fontSize="sm"
          rounded="full"
          pos="relative"
          css={{
            boxShadow: "12px 12px 32px #a8a8a8,-12px -12px 32px #ffffff",
          }}
        >
          {typeof dataItemSkill.icon === "string" ? (
            <Image src={dataItemSkill.icon} alt={dataItemSkill.title} w={16} />
          ) : (
            <Icon as={dataItemSkill.icon} fontSize="3xl" color="white" />
          )}
        </Flex>
        <Text
          fontFamily="heading"
          fontSize="2xl"
          color="grayMetacore.main"
          textAlign="center"
        >
          {dataItemSkill.title}
        </Text>
        <Text fontSize="lg" textAlign="center" color="grayMetacore.main">
          {dataItemSkill.text}
        </Text>
      </Stack>
    </FlexMotion>
  );
};

export { ItemSkill };
