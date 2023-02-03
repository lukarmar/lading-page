import {
  Box,
  Button,
  Heading,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

const Page404 = () => {
  const isMDMatch = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <>
      <Flex justify="center" align="center" mt={10}>
        <Image
          maxW="720px"
          src="/error-404.png"
          alt="Error 404 not found Illustration"
        />
      </Flex>

      <Box mb={14}>
        <Heading textAlign="center">Página não encontrada.</Heading>

        <Box textAlign="center" marginTop={4}>
          <Link href="/" passHref>
            <Button
              size={isMDMatch ? "md" : "lg"}
              transition="all 0.3s"
              _hover={{
                filter: "drop-shadow(1px 8px 7px #00000071)",
                transform: "translateY(-5px)",
              }}
            >
              Voltar à Home
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Page404;
