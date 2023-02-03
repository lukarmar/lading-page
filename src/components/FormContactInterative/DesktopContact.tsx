/* eslint-disable import/prefer-default-export */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

import { useStateControlFeedback } from "hooks/ControlFeedbackProvider";
import { PropsDataResponse } from "types";

import { Form } from "./Form";

const DesktopContact = ({ setDataResponse }: PropsDataResponse) => {
  const { isOpen, onToggleState } = useStateControlFeedback();

  return (
    <Modal
      isOpen={isOpen}
      blockScrollOnMount={false}
      scrollBehavior="inside"
      isCentered
      onClose={onToggleState}
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
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Form setDataResponse={setDataResponse} />
        </ModalBody>

        {/* <ModalFooter>
         
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export { DesktopContact };
