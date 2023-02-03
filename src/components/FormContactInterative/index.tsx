/* eslint-disable import/prefer-default-export */
import { useState } from "react";

import { DesktopContact } from "./DesktopContact";
import { ModalFeedbackResponse } from "./ModalFeedbackResponse";

const FormContactInterative = () => {
  const [dataResponse, setDataResponse] = useState<Response>({
    status: 200,
  } as Response);

  return (
    <>
      <DesktopContact setDataResponse={setDataResponse} />
      <ModalFeedbackResponse dataResponse={dataResponse} />
    </>
  );
};

export default FormContactInterative;
