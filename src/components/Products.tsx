/* eslint-disable sonarjs/no-duplicate-string */
import {
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { FlexMotion } from "components/motion/FlexMotion";
import { useStateControlFeedback } from "hooks/ControlFeedbackProvider";
import { useMoveToTef } from "hooks/MoveToRefProvider";

import { CardProducts, PropsCardProductsData } from "./CardProducts";

const dataCardProducts: PropsCardProductsData[] = [
  {
    imageProduct: "/debenture-icon.svg",
    nameProduct: "Renda Fixa",
    descriptionProduct:
      "Ativos de longo prazo, de crédito privado e com baixa liquidez, eles têm uma boa rentabilidade e atraem investidores mais conservadores. Alguns até possuem isenção de imposto de renda, o que os tornam ainda mais atraentes.",
  },
  {
    imageProduct: "/fundo-de-investimentos-icon.svg",
    nameProduct: "Renda Variável",
    descriptionProduct:
      "Diversificação, gestão profissional e alta performance são as principais vantagens de aplicar em renda variável, além de ser possível começar mesmo com poucos recursos.",
  },
];

const Products = () => {
  const isMDMatch = useBreakpointValue({
    base: true,
    md: false,
  });
  const { onToggleState } = useStateControlFeedback();

  const refProducts = useRef<HTMLDivElement>(null);
  const titleAnimation = useAnimation();
  const cardsAnimation = useAnimation();
  const { applicateRef } = useMoveToTef();

  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [cardsRef, cardsInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (refProducts.current) {
      applicateRef(refProducts);
    }
  }, [refProducts, applicateRef]);

  useEffect(() => {
    titleAnimation.start(titleInView ? "visible" : "hidden");
  }, [titleAnimation, titleInView]);

  useEffect(() => {
    cardsAnimation.start(cardsInView ? "visible" : "hidden");
  }, [cardsAnimation, cardsInView]);

  return (
    <Flex
      ref={refProducts}
      id="investimentos"
      h={{ base: "full" }}
      minH="full"
      bg="#fff"
      py={16}
    >
      <Flex
        direction="column"
        justify="space-around"
        w="full"
        mx="auto"
        px={{ base: 6, md: 16 }}
        maxW="1440px"
      >
        <FlexMotion
          mb={12}
          ref={titleRef}
          direction="column"
          align="center"
          animate={titleAnimation}
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
            px={{ base: 0, md: 20, lg: 52, xl: 72 }}
            textAlign="center"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            color="grayMetacore.main"
            mb={4}
          >
            Investimentos
          </Heading>
          <Text
            as="span"
            fontSize="2xl"
            fontWeight="normal"
            color="#BCAEC2"
            textAlign="center"
          >
            Conheça as nossas metodologias
          </Text>
        </FlexMotion>
        <FlexMotion
          ref={cardsRef}
          animate={cardsAnimation}
          direction="column"
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
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={10}
            rowGap={16}
            mb={20}
            pos="relative"
          >
            {dataCardProducts?.map((dataProduct) => (
              <CardProducts key={dataProduct.imageProduct} {...dataProduct} />
            ))}
          </Flex>
          <Flex justify="center">
            <Button
              size={isMDMatch ? "md" : "lg"}
              onClick={() => onToggleState()}
            >
              Conheça
            </Button>
          </Flex>
        </FlexMotion>
      </Flex>
    </Flex>
  );
};

export default Products;
