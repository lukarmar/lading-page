import { SimpleGrid, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode, useRef, useEffect } from "react";

import logoFooter from "../../../public/logo_footer.webp";
import { dataMenuHeader } from "data/dataMenuHeader";
import { useMoveToTef } from "hooks/MoveToRefProvider";
import scrollToRef from "utils/moveScrollForElement";

const ItemMenuFooter = ({
  children,
  keyItem,
}: {
  children: ReactNode;
  keyItem: string;
}) => {
  const { refElements } = useMoveToTef();

  return (
    <Flex w="min" direction="column" pos="relative" role="group">
      <Text
        as="span"
        fontSize="2xl"
        cursor="pointer"
        _groupHover={{
          color: "orangeMetacore.main",
        }}
        onClick={() => scrollToRef(refElements[keyItem])}
      >
        {children}
      </Text>
      <Text
        as="span"
        _after={{
          content: "''",
          position: "absolute",
          top: "110%",
          left: 0,
          w: "40%",
          h: "1px",
          backgroundColor: "#fff",
          transition: "0.1s linear",
        }}
        _groupHover={{
          _after: {
            w: "100%",
            bgColor: "orangeMetacore.main",
          },
        }}
      />
    </Flex>
  );
};

const Footer = () => {
  const refFooter = useRef<HTMLDivElement>(null);
  const { applicateRef } = useMoveToTef();
  const ageNow = new Date().getFullYear().toString();

  useEffect(() => {
    if (refFooter.current) {
      applicateRef(refFooter);
    }
  }, [applicateRef]);

  return (
    <Flex
      ref={refFooter}
      id="footer"
      justify="center"
      bgColor="grayMetacore.main"
      color="#FFFFFF"
      as="footer"
      width="full"
    >
      <Flex
        direction="column"
        align={{ base: "flex-start", sm: "center" }}
        px={{ base: 6, md: 16 }}
        py={20}
        pb={32}
        maxW="1440px"
        pos="relative"
      >
        <Flex direction="column" align="center" w="full" mb={14}>
          <Flex w="full" maxW={96}>
            <Image src={logoFooter} alt="Lofo MetaCore" priority />
          </Flex>
          <Text
            as="span"
            w="full"
            maxW="600px"
            fontSize={16}
            color="#cccccc"
            textAlign="center"
            mt={4}
          >
            A MetaCore é um hub de negócios de tecnologias inovadoras, soluções
            em blockchain e metaverso, investimentos e finanças
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4, lg: 5 }}
          gap={{ base: "30px", md: "70px" }}
        >
          {dataMenuHeader?.map((dataMenu) => (
            <ItemMenuFooter
              key={dataMenu.title}
              keyItem={dataMenu.title.toLowerCase()}
            >
              {dataMenu.title}
            </ItemMenuFooter>
          ))}
        </SimpleGrid>
      </Flex>
      <Flex
        w="full"
        bgColor="#ffffff13"
        justify="center"
        align="center"
        direction={{ base: "column", sm: "row" }}
        py={2}
        pos="absolute"
        bottom={0}
        left={0}
        right={0}
      >
        <Text as="span" color="#ffffffb0">
          {`© MetaCore ${ageNow} -`}
        </Text>
        <Text as="span" color="#ffffffb0">
          &nbsp;Todos os direitos reservados
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
