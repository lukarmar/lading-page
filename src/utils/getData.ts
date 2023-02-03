/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsDataInputs } from "types/index";

const handleSubimit = (
  data: PropsDataInputs,
  setStatus?: (data: Response) => void
) => {
  fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (setStatus) setStatus(res);
  });
};

export { handleSubimit };
