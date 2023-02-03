import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useCycle } from "framer-motion";
import { useEffect, ReactNode } from "react";

import { Drawer } from "../Drawer";
import { MenuToggle } from "components/Drawer/MenuToggle";
import { FlexMotion } from "components/motion/FlexMotion";
import { dataMenuHeader } from "data/dataMenuHeader";
import { useMoveToTef } from "hooks/MoveToRefProvider";
import scrollToRef from "utils/moveScrollForElement";

interface PropsItemMenu {
  children: ReactNode;
  delayAnimation: number;
  keyItem: string;
}

function ItemMenu({ children, delayAnimation, keyItem }: PropsItemMenu) {
  const { refElements } = useMoveToTef();

  return (
    <FlexMotion
      w="full"
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.2 * delayAnimation,
          },
        },
        hidden: {
          opacity: 0,
          x: 10,
        },
      }}
    >
      <Heading
        fontSize="xl"
        color="#fff"
        fontWeight="medium"
        textAlign="center"
        transition="0.2s"
        _hover={{
          color: "orangeMetacore.main",
          fontWeight: "bold",
        }}
      >
        <Text
          cursor="pointer"
          onClick={() => scrollToRef(refElements[keyItem])}
        >
          {children}
        </Text>
      </Heading>
    </FlexMotion>
  );
}

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { refElements } = useMoveToTef();

  useEffect(() => {
    global.document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <Flex
      as="header"
      w="full"
      h={16}
      bgColor="grayMetacore.main"
      justify="center"
      boxShadow="sm"
      pos="fixed"
      zIndex="modal"
    >
      <Flex
        w="full"
        h="full"
        align="center"
        px={{ base: 5, lg: 16 }}
        maxW="1440px"
        pos="relative"
      >
        <Flex
          w={{ base: "full", lg: 96 }}
          h="full"
          align="center"
          py={2}
          pos="relative"
        >
          <Image
            src="/logo-metacore.svg"
            alt="Logo Metacore"
            w={12}
            cursor="pointer"
            onClick={() => scrollToRef(refElements.metacore)}
          />
          <Text
            as="span"
            color="orangeMetacore.main"
            fontWeight="bold"
            fontSize="2xl"
            cursor="pointer"
            onClick={() => scrollToRef(refElements.metacore)}
          >
            &nbsp;MetaCore
          </Text>
        </Flex>
        <Flex display={{ base: "flex", lg: "none" }} zIndex="tooltip">
          <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
        </Flex>
        <Flex
          display={{ base: "none", lg: "flex" }}
          w="full"
          h="full"
          justify="space-between"
          align="center"
        >
          {dataMenuHeader?.map((dataMenu, index) => (
            <ItemMenu
              key={dataMenu.title}
              delayAnimation={index}
              keyItem={dataMenu.title.toLowerCase()}
            >
              {dataMenu.title}
            </ItemMenu>
          ))}
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} toggle={() => toggleOpen()} />
    </Flex>
  );
};

export default Header;
