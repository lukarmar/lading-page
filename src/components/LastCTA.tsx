import { Flex, Heading, Button, useBreakpointValue } from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import aframericanManInVr from "../../public/aframerican-man-in-vr.webp";
import youngBeardedMan from "../../public/young-bearded-man.webp";
import youngGirlExperienceVr from "../../public/young-girl-experience-vr.webp";
import { FlexMotion } from "components/motion/FlexMotion";
import { useStateControlFeedback } from "hooks/ControlFeedbackProvider";
import { useMoveToTef } from "hooks/MoveToRefProvider";

import { SliderImageCTA, PropsSliderImageCTA } from "./SliderImageCTA";

const dataImagesSlider: PropsSliderImageCTA[] = [
  {
    name: "young girl experience vr",
    imagePath: youngGirlExperienceVr,
  },
  {
    name: "framerican man in vr",
    imagePath: aframericanManInVr,
  },
  {
    name: "young bearded man",
    imagePath: youngBeardedMan,
  },
];

export default function LastCTA() {
  const isMDMatch = useBreakpointValue({
    base: true,
    md: false,
  });
  const { onToggleState } = useStateControlFeedback();

  const refLastCTA = useRef<HTMLDivElement>(null);
  const copyAnimation = useAnimation();
  const imageAnimation = useAnimation();
  const bannerAnimation = useAnimation();
  const { applicateRef } = useMoveToTef();

  const [copyRef, copyInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [imageRef, imageInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [bannerRef, bannerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (refLastCTA.current) {
      applicateRef(refLastCTA);
    }
  }, [refLastCTA, applicateRef]);

  useEffect(() => {
    copyAnimation.start(copyInView ? "visible" : "hidden");
  }, [copyAnimation, copyInView]);

  useEffect(() => {
    imageAnimation.start(imageInView ? "visible" : "hidden");
  }, [imageAnimation, imageInView]);

  useEffect(() => {
    bannerAnimation.start(bannerInView ? "visible" : "hidden");
  }, [bannerAnimation, bannerInView]);

  return (
    <Flex h="full" py={16} bg="#fff" id="compromisso" ref={refLastCTA}>
      <Flex
        direction="column"
        rowGap="85px"
        w="full"
        mx="auto"
        pt={5}
        px={{ base: 6, md: 16 }}
        maxW="1440px"
      >
        <Flex
          direction={{ base: "column", xl: "row" }}
          columnGap="20px"
          rowGap="35px"
        >
          <FlexMotion
            ref={imageRef}
            // maxW={{ base: "full", lg: "full" }}
            animate={imageAnimation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
              },
              hidden: {
                opacity: 0,
              },
            }}
          >
            <SliderImageCTA dataImages={dataImagesSlider} />
          </FlexMotion>
          <FlexMotion
            ref={copyRef}
            direction="column"
            w={{ base: "full", xl: "lg" }}
            animate={copyAnimation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
              },
              hidden: {
                opacity: 0,
                x: 6,
              },
            }}
          >
            <Heading
              as="h4"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="medium"
              color="#BCAEC2"
              textAlign={{ base: "center", xl: "left" }}
            >
              Nosso compromisso
            </Heading>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl" }}
              mt={4}
              mb={6}
              color="#312536"
              textAlign={{ base: "center", xl: "left" }}
            >
              Inovação, confiança e alta performance
            </Heading>
            <Heading
              as="h4"
              fontSize="2xl"
              fontWeight="light"
              color="#312536"
              textAlign={{ base: "center", xl: "left" }}
            >
              Proporcionar para você tranquilidade e confiança enquanto nós
              trabalhamos duro para te entregar resultados sólidos.
            </Heading>
          </FlexMotion>
        </Flex>
        <FlexMotion
          ref={bannerRef}
          direction="column"
          py={14}
          bgColor="grayMetacore.main"
          pos="relative"
          animate={bannerAnimation}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
            },
            hidden: {
              opacity: 0,
              y: 40,
            },
          }}
        >
          <Heading
            as="h1"
            px={{ base: 2, md: 20, lg: 52, xl: 72 }}
            textAlign="center"
            fontSize="4xl"
            fontWeight="bold"
            color="white"
            mb={8}
          >
            Fale com nosso time de especialistas
          </Heading>
          <Flex
            justify="center"
            direction={{ base: "column", md: "row" }}
            px={10}
          >
            <Button
              variant="solid"
              size={isMDMatch ? "md" : "lg"}
              mb={{ base: 5, lg: 0 }}
              mr={{ base: 0, lg: 6 }}
              transition="0.3s"
              _hover={{
                transform: "translateY(-4px)",
                bgColor: "orangeMetacore.hover",
              }}
              onClick={() => onToggleState()}
            >
              COMEÇAR
            </Button>
            {/* <Button variant="ghost" size={isMDMatch ? "md" : "lg"}>
              Join
            </Button> */}
          </Flex>
        </FlexMotion>
      </Flex>
    </Flex>
  );
}
