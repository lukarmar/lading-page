/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import { Flex, keyframes } from "@chakra-ui/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const pulse = keyframes`
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0px #25d36596;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
  }
`;

const WhatsappButton = () => {
  const pulseAnimation = `${pulse} 2s infinite`;

  return (
    <Link href="#">
      <a target="_blank">
        <Flex
          pos="fixed"
          align="center"
          justify="center"
          w={{ base: "45px", md: "60px" }}
          h={{ base: "45px", md: "60px" }}
          bottom={{ base: "20px", md: "40px" }}
          right={{ base: "20px", md: "70px" }}
          cursor="pointer"
          bgColor="#25d366"
          color="#fff"
          borderRadius="50px"
          fontSize={{ base: "25px", md: "30px" }}
          boxShadow=" 0px 0px 1px 1px #0000001a"
          zIndex={1000}
          animation={pulseAnimation}
        >
          <FaWhatsapp />
        </Flex>
      </a>
    </Link>
  );
};

export default WhatsappButton;
