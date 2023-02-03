/* eslint-disable import/prefer-default-export */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Image,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import { useStateControlFeedback } from "hooks/ControlFeedbackProvider";
import { PropsDataResponse } from "types";

interface PropsAttributesDataDialog {
  status?: "info" | "warning" | "success" | "error" | undefined;
  title?: string;
  description?: string;
}

interface PropKeyDataDialog {
  [key: number]: PropsAttributesDataDialog;
}

const ModalFeedbackResponse = ({ dataResponse }: PropsDataResponse) => {
  const { isOpenFeedbackModal, onChangeStateFeedbackModal } =
    useStateControlFeedback();

  const statusCode = dataResponse?.status as number;

  const dataDialogModalFeedback: PropKeyDataDialog = {
    200: {
      status: "success",
      title: "Solicitação enviada com sucesso",
      description:
        "Sua solicitação foi enviada com sucesso. Em breve um de nossos colaboradores entrará em contato",
    },
    500: {
      status: "error",
      title: "Falha ao enviar solicitação",
      description:
        "Houve uma falha ao enviar sua solicitação. Aguarde alguns instantes e tente novamente.",
    },
  };

  return (
    <Modal
      isOpen={isOpenFeedbackModal}
      blockScrollOnMount={false}
      scrollBehavior="inside"
      isCentered
      closeOnOverlayClick={false}
      closeOnEsc={false}
      onClose={() => onChangeStateFeedbackModal(2000)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
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
            />
            <Text
              as="span"
              color="orangeMetacore.main"
              fontWeight="bold"
              fontSize="2xl"
              cursor="pointer"
            >
              &nbsp;MetaCore
            </Text>
          </Flex>
        </ModalHeader>
        <ModalBody pb={6}>
          <Alert
            status={dataDialogModalFeedback[statusCode].status}
            bgColor="transparent"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="full"
          >
            <AlertIcon boxSize="80px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {dataDialogModalFeedback[statusCode].title}
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              {dataDialogModalFeedback[statusCode].description}
            </AlertDescription>
          </Alert>
        </ModalBody>

        {/* <ModalFooter>
         
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export { ModalFeedbackResponse };
