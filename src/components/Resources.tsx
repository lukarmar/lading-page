/* eslint-disable sonarjs/no-duplicate-string */
import { Flex, Image, Heading } from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { FlexMotion } from "components/motion/FlexMotion";
import { TextUnderline } from "components/TextUnderline";
import { useMoveToTef } from "hooks/MoveToRefProvider";

import { StepsProps, ItemSkill } from "./ItemSkill";

const STEPS: StepsProps[] = [
  {
    title: "Profissionais qualificados",
    text: "",
    icon: "/product.svg",
    bgColor: "orangeMetacore.main",
  },

  {
    title: "Gerencie com segurança seus ativos",
    text: "",
    icon: "/affiliate.svg",
    bgColor: "orangeMetacore.main",
  },
  {
    title: "Seus dados seguros conforme LGPD",
    text: "",
    icon: "/security.svg",
    bgColor: "orangeMetacore.main",
  },
];

export default function Resources() {
  const refResources = useRef<HTMLDivElement>(null);
  const illustrationAnimation = useAnimation();
  const titleAnimation = useAnimation();
  const lastSectionAnimation = useAnimation();
  const { applicateRef } = useMoveToTef();

  const [illustrationRef, illustrationInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [titleRef, titleInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [lastSectionRef, lastSectionInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    illustrationAnimation.start(illustrationInView ? "visible" : "hidden");
  }, [illustrationAnimation, illustrationInView]);

  useEffect(() => {
    titleAnimation.start(titleInView ? "visible" : "hidden");
  }, [titleAnimation, titleInView]);

  useEffect(() => {
    lastSectionAnimation.start(lastSectionInView ? "visible" : "hidden");
  }, [lastSectionAnimation, lastSectionInView]);

  useEffect(() => {
    illustrationAnimation.start(illustrationInView ? "visible" : "hidden");
  }, [illustrationAnimation, illustrationInView]);

  useEffect(() => {
    if (refResources.current) {
      applicateRef(refResources);
    }
  }, [applicateRef]);

  return (
    <Flex ref={refResources} id="metaverso" h="full" py={20} bg="#fff">
      <Flex
        direction="column"
        w="full"
        mx="auto"
        px={{ base: 6, md: 16 }}
        maxW="1440px"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align="center"
          columnGap="20px"
          rowGap="35px"
          mb={{ base: 12, lg: 28 }}
        >
          <FlexMotion
            ref={illustrationRef}
            maxW="600px"
            animate={illustrationAnimation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
              },
              hidden: {
                opacity: 0,
                x: -5,
              },
            }}
          >
            <Image
              src="/businessman-running.webp"
              alt="young girl experience vr"
              w="full"
              objectFit="cover"
            />
          </FlexMotion>
          <FlexMotion
            ref={titleRef}
            direction="column"
            w={{ base: "full", lg: "35%" }}
            textAlign={{ base: "center", lg: "left" }}
            animate={titleAnimation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
              },
              hidden: {
                opacity: 0,
                x: 5,
              },
            }}
          >
            <Heading
              as="h4"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="medium"
              color="#968f99"
            >
              Metaverso
            </Heading>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "5xl" }}
              mt={4}
              mb={6}
              color="#312536"
              textAlign={{ base: "center", lg: "left" }}
            >
              Experiência totalmente imersiva
            </Heading>
            <Heading
              as="h4"
              fontSize={{ base: "xl", md: "3xl" }}
              fontWeight="light"
              color="#312536c5"
              textAlign={{ base: "center", lg: "left" }}
            >
              Experiências criativas e inovação tecnologica em conjunto com a
              conexão 5G e a tecnologia de blockchain.
            </Heading>
          </FlexMotion>
        </Flex>
        <FlexMotion direction="column">
          <FlexMotion
            ref={lastSectionRef}
            animate={lastSectionAnimation}
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
              textAlign="center"
              fontSize="4xl"
              px={{ base: 0, md: 20, lg: 52, xl: 72 }}
              mb={14}
              fontWeight="bold"
              color="#312536be"
            >
              Investimento confiável e seguro na
              <Heading color="orangeMetacore.main" fontSize="5xl" mb={16}>
                <TextUnderline colorUnderline="#ff510024">
                  MetaCore
                </TextUnderline>
              </Heading>
            </Heading>
          </FlexMotion>
          <Flex w="full" justify="space-around" flexWrap="wrap" rowGap="50px">
            {STEPS?.map((step, index) => (
              <ItemSkill
                key={(Math.random() * STEPS.length).toString()}
                dataItemSkill={step}
                index={index}
              />
            ))}
          </Flex>
        </FlexMotion>
      </Flex>
    </Flex>
  );
}
