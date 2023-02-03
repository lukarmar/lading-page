/* eslint-disable import/prefer-default-export */
import { Flex, Image, Text } from "@chakra-ui/react";

export interface PropsCardProductsData {
  imageProduct: string;
  nameProduct: string;
  descriptionProduct: string;
}

const CardProducts = ({
  imageProduct,
  nameProduct,
  descriptionProduct,
}: PropsCardProductsData) => {
  return (
    <Flex
      w="full"
      justify="space-between"
      align="center"
      direction="column"
      borderRadius="md"
      boxShadow="2xl"
      cursor="pointer"
      pos="relative"
      _after={{
        content: "''",
        transitionDuration: "1s",
        transition: "hover",
        position: "absolute",
        top: "-2px",
        left: "-2px",
        right: "-2px",
        bottom: "-2px",
        transform: "skewX(2deg) skewY(1deg)",
        backgroundColor: "orangeMetacore.main",
      }}
    >
      <Flex
        w="full"
        h="full"
        px={2}
        py={8}
        direction="column"
        bgColor="#fff"
        align="center"
        zIndex="docked"
      >
        <Flex w={28} h={24} mb={{ base: 5, lg: 0 }} pos="relative">
          <Image src={imageProduct} alt={nameProduct} />
        </Flex>
        <Flex direction="column">
          <Text
            fontSize="2xl"
            fontWeight="semibold"
            textAlign="center"
            color="#312536"
            my={4}
          >
            {nameProduct}
          </Text>
          <Text
            fontSize="lg"
            fontWeight="light"
            textAlign="center"
            color="#3125369e"
            px={3}
          >
            {descriptionProduct}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { CardProducts };
