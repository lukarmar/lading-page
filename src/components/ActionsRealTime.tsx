import { Flex, Heading, Text } from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { FlexMotion } from "components/motion/FlexMotion";
import { SliderCrypto } from "components/SliderCrypto";
import { useMoveToTef } from "hooks/MoveToRefProvider";
import { PropsData, getInformationCrypto } from "utils/getInformationCrypto";

// interface PropsDataProduct {
//   idCoin: string;
// }

// const dataCardProducts: PropsDataProduct[] = [
//   {
//     idCoin: "bitcoin",
//   },
//   {
//     idCoin: "ethereum",
//   },
//   {
//     idCoin: "tether",
//   },
//   {
//     idCoin: "bnb",
//   },
//   {
//     idCoin: "cardano",
//   },
//   {
//     idCoin: "solana",
//   },
//   {
//     idCoin: "polkadot",
//   },
// ];

const ActionsRealTime = () => {
  const [dataCrypto, setDataCrypto] = useState<PropsData[]>([]);
  const refCryptos = useRef<HTMLDivElement>(null);

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

  function formatCurrency(data: number): string {
    return data.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  const getCryptoData = useCallback(() => {
    // const idsParamsCrypto = dataCardProducts
    //   .map((productId) => productId.idCoin)
    //   .join(",");
    getInformationCrypto({ fiatCurrency: "brl" }).then((response) =>
      setDataCrypto(() =>
        response.map((dataResponse) => ({
          ...dataResponse,
          formatCurrentPrice: formatCurrency(dataResponse.current_price),
        }))
      )
    );
  }, []);

  useEffect(() => {
    titleAnimation.start(titleInView ? "visible" : "hidden");
  }, [titleAnimation, titleInView]);

  useEffect(() => {
    cardsAnimation.start(cardsInView ? "visible" : "hidden");
  }, [cardsAnimation, cardsInView]);

  useEffect(() => {
    getCryptoData();
  }, [getCryptoData]);

  useEffect(() => {
    if (refCryptos.current) {
      applicateRef(refCryptos);
    }
  }, [applicateRef]);

  return (
    <Flex
      ref={refCryptos}
      id="criptomoedas"
      h="full"
      bgColor="grayMetacore.main"
      py={16}
      pos="relative"
    >
      <Flex
        direction="column"
        justify="space-around"
        w="full"
        mx="auto"
        pt={5}
        maxW="1440px"
      >
        <FlexMotion
          ref={titleRef}
          direction="column"
          align="center"
          mb={{ base: 16, lg: 0 }}
          px={{ base: 6, md: 16 }}
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
            px={{ base: 0, md: 20, lg: 28 }}
            textAlign="center"
            color="#fff"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            mb={8}
          >
            Fique por dentro da cotação das principais criptomoedas
          </Heading>
          <Text
            as="span"
            fontSize="2xl"
            fontWeight="normal"
            color="#fff"
            textAlign="center"
          >
            As criptomoedas permitem contornar custos e evitar gastos com taxas
            gerando impactos positivos para seus investimentos num mercado sem
            fronteiras.
          </Text>
        </FlexMotion>
        <FlexMotion
          ref={cardsRef}
          animate={cardsAnimation}
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
          <SliderCrypto dataCrypto={dataCrypto} />
        </FlexMotion>
      </Flex>
    </Flex>
  );
};

export default ActionsRealTime;
