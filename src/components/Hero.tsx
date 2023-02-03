import {
  Flex,
  Button,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useEffect } from "react";

import illustrationMetaverse from "../../public/illustration-metaverse.webp";
import { FlexMotionCustonMerge } from "components/motion/FlexMotion";
import { useStateControlFeedback } from "hooks/ControlFeedbackProvider";
import { useMoveToTef } from "hooks/MoveToRefProvider";

import { TextUnderline } from "./TextUnderline";

const Hero = () => {
  const refHero = useRef<HTMLDivElement>(null);
  const isMDMatch = useBreakpointValue({
    base: true,
    md: false,
  });
  const { applicateRef } = useMoveToTef();
  const { onToggleState } = useStateControlFeedback();

  useEffect(() => {
    if (refHero.current) {
      applicateRef(refHero);
    }
  }, [applicateRef]);

  return (
    <Flex
      ref={refHero}
      id="metacore"
      w="full"
      h={{ base: "full", lg: "100vh" }}
      pb={{ base: 28, lg: 0 }}
      justify="center"
      bgColor="grayMetacore.main"
    >
      <Flex
        w="full"
        h="full"
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "normal" }}
        justify={{ base: "normal", lg: "space-between" }}
        px={{ base: 6, md: 16 }}
        pt={{ base: 0, md: 7, lg: 2, "2xl": 7 }}
        maxW="1440px"
        pos="relative"
      >
        <FlexMotionCustonMerge
          direction="column"
          w={{ base: "full", lg: "45%", "2xl": "40%" }}
          h="full"
          pt={{ base: 24, md: 28 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            color="#fff"
            fontSize={{ base: "4xl", xl: "5xl", "2xl": "6xl" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            Inovação em tecnologia, investimentos e negócios
          </Heading>
          <Text
            color="#fff"
            textAlign={{ base: "center", lg: "left" }}
            lineHeight={6}
            pr={{ base: 0, lg: 8 }}
            mt={6}
          >
            A
            <Text
              as="span"
              color="orangeMetacore.main"
              fontWeight="bold"
              fontSize="xl"
            >
              &nbsp;
              <TextUnderline colorUnderline="#4A5568">MetaCore</TextUnderline>
              &nbsp;
            </Text>
            é especialista no desenvolvimento de inovações tecnológicas e
            oferece o melhor de rentabilidade em investimentos e alta
            performance para seu negócio.
          </Text>
          <Text
            color="#fff"
            textAlign={{ base: "center", lg: "left" }}
            pr={{ base: 0, lg: 14 }}
            mt={2}
          >
            Inovação com bases sólidas para negócios e investimentos no
            <Text
              as="span"
              color="orangeMetacore.main"
              fontWeight="bold"
              fontSize="xl"
            >
              &nbsp;
              <TextUnderline colorUnderline="#4A5568">Metaverso</TextUnderline>
            </Text>
            .
          </Text>
          <Flex
            as="span"
            display="flex"
            justifyContent={{
              base: "space-between",
              md: "center",
              lg: "flex-start",
            }}
            alignItems={{ base: "center", lg: "flex-start" }}
            flexDirection={{ base: "column", md: "row" }}
            mt={10}
            mb={{ base: 10, lg: 0 }}
          >
            <Button
              mr={{ base: 0, md: 6 }}
              mb={{ base: 6, md: 0 }}
              size={isMDMatch ? "md" : "lg"}
              transition="all 0.3s"
              _hover={{
                filter: "drop-shadow(1px 8px 7px #00000071)",
                transform: "translateY(-5px)",
              }}
              onClick={() => onToggleState()}
            >
              COMECE JÁ
            </Button>
            {/* <Button variant="ghost" size={isMDMatch ? "md" : "lg"}>
              How it works
            </Button> */}
          </Flex>
        </FlexMotionCustonMerge>
        <FlexMotionCustonMerge
          w={{ base: "full", lg: "55%", "2xl": "60%" }}
          h="full"
          pt={{ base: 0, md: 24 }}
          // pb={{ base: 0, md: 12 }}
          pos="relative"
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={illustrationMetaverse}
            alt="illustration Metaverse"
            layout="intrinsic"
            placeholder="blur"
            priority
          />
        </FlexMotionCustonMerge>
      </Flex>
    </Flex>
  );
};

export default Hero;
