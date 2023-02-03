import { Dispatch, SetStateAction } from "react";

export interface PropsDataInputs {
  name: string;
  email: string;
  phone: string;
}

export interface PropsDataResponse {
  dataResponse?: Response;
  setDataResponse?: Dispatch<SetStateAction<Response>>;
}
