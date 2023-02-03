/* eslint-disable import/prefer-default-export */
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useMemo } from "react";

import { PropsData } from "utils/getInformationCrypto";

export interface PropsCardActionsData {
  imageProduct: string;
  nameProduct: string;
  priceProduct: string;
  yieldProduct: string;
  chartRealTime: string;
  index: number;
}

const CardActions = ({
  image,
  formatCurrentPrice,
  name,
  symbol,
  price_change_percentage_24h,
}: PropsData) => {
  const colorPercentagePrice =
    price_change_percentage_24h >= 0 ? "#3DC84B" : "#F44242";

  const formatedPriceChangePercentage24h = useMemo(() => {
    return `% ${price_change_percentage_24h.toFixed(2)}`;
  }, [price_change_percentage_24h]);

  return (
    <Flex
      w="full"
      // justify="space-evenly"
      align="center"
      direction={{ base: "column", lg: "row" }}
      px={{ base: 2, lg: 0 }}
      pl={{ base: 2, lg: 4 }}
      py={4}
      h="full"
      boxShadow="2xl"
      borderRadius="md"
    >
      <Flex
        flex={{ base: 1, lg: "none" }}
        justify="center"
        w={{ base: 28, lg: 20 }}
        h="auto"
        mr={{ base: 0, lg: 6 }}
        mb={{ base: 5, lg: 0 }}
        borderRadius="full"
        pos="relative"
      >
        <Flex w="full" h="full">
          <Image
            src={image}
            alt={name}
            width="116px"
            height="116px"
            objectFit="contain"
            loading="eager"
          />
        </Flex>
      </Flex>
      <Flex direction="column">
        <Text
          fontSize={{ base: "3xl", md: "3xl" }}
          fontWeight="light"
          textAlign={{ base: "center", lg: "left" }}
          color="#fff"
        >
          {name}
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "md" }}
          fontWeight="light"
          textAlign={{ base: "center", lg: "left" }}
          color="#fff"
        >
          {`(${symbol.toUpperCase()})`}
        </Text>
        <Text
          fontSize={{ base: "3xl", md: "2xl" }}
          fontWeight="semibold"
          textAlign={{ base: "center", lg: "left" }}
          color="#fff"
        >
          {formatCurrentPrice}
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "xl" }}
          fontWeight="light"
          textAlign={{ base: "center", lg: "left" }}
          color={colorPercentagePrice}
        >
          {formatedPriceChangePercentage24h}
        </Text>
      </Flex>
      {/* <Flex>
        <Image src={chartRealTime} alt={nameProduct} />
      </Flex> */}
    </Flex>
  );
};

export { CardActions };
