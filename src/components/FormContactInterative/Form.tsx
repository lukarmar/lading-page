/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  Formik,
  Field,
  Form as FormFormik,
  FormikHelpers,
  FieldProps,
} from "formik";
import InputMask from "react-input-mask";
import * as Yup from "yup";

import { useStateControlFeedback } from "hooks/ControlFeedbackProvider";
import { PropsDataResponse, PropsDataInputs } from "types";
import { handleSubimit } from "utils/getData";

const DisplayValidatorSchema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  phone: Yup.string()
    .matches(
      /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/,
      "Digite um telefone celular válido"
    )
    .required("O telefone é obrigatório"),
});

const Form = ({ setDataResponse }: PropsDataResponse) => {
  const { onCloseState, onChangeStateFeedbackModal } =
    useStateControlFeedback();

  return (
    <Flex direction="column">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validationSchema={DisplayValidatorSchema}
        onSubmit={(
          values: PropsDataInputs,
          { resetForm }: FormikHelpers<PropsDataInputs>
        ) => {
          handleSubimit(values, setDataResponse);
          onCloseState();
          resetForm();
          onChangeStateFeedbackModal(2000);
          // setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <FormFormik>
            <Field name="name">
              {({ field, form }: FieldProps) => {
                const isInvalidModifieldName =
                  ((form.errors.name && form.touched.name) as boolean) ||
                  undefined;
                return (
                  <FormControl isRequired isInvalid={isInvalidModifieldName}>
                    <FormLabel htmlFor="name">Nome Completo</FormLabel>
                    <Input
                      {...field}
                      id="name"
                      placeholder="Nome Completo"
                      name="name"
                    />
                    {touched.name && errors.name && (
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    )}
                  </FormControl>
                );
              }}
            </Field>
            <Field name="email">
              {({ field, form }: FieldProps) => {
                const isInvalidModifieldEmail =
                  ((form.errors.email && form.touched.email) as boolean) ||
                  undefined;
                return (
                  <FormControl
                    isRequired
                    isInvalid={isInvalidModifieldEmail}
                    mt={4}
                  >
                    <FormLabel>E-mail</FormLabel>
                    <Input
                      {...field}
                      placeholder="nome@nome.com.br"
                      type="email"
                      name="email"
                      id="email"
                    />
                    {touched.email && errors.email && (
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    )}
                  </FormControl>
                );
              }}
            </Field>
            <Field name="phone">
              {({ field, form }: FieldProps) => {
                const isInvalidModifieldPhone =
                  ((form.errors.phone && form.touched.phone) as boolean) ||
                  undefined;
                return (
                  <FormControl
                    isRequired
                    isInvalid={isInvalidModifieldPhone}
                    mt={4}
                  >
                    <FormLabel>Telefone (whatsapp)</FormLabel>
                    <Input
                      {...field}
                      as={InputMask}
                      mask="(**) *****-****"
                      id="phone"
                      placeholder="Telefone"
                      name="phone"
                    />
                    {touched.phone && errors.phone && (
                      <FormErrorMessage>{errors.phone}</FormErrorMessage>
                    )}
                  </FormControl>
                );
              }}
            </Field>
            <Flex mt={14}>
              <Button colorScheme="blue" type="submit" mr={3}>
                Enviar
              </Button>
              <Button
                variant="outline"
                border="2px"
                borderColor="grayMetacore.main"
                onClick={onCloseState}
              >
                Cancel
              </Button>
            </Flex>
          </FormFormik>
        )}
      </Formik>
    </Flex>
  );
};

export { Form };
