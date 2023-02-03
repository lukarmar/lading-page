import { ReactChild } from "react";

import { ControlFeedbackProvider } from "./ControlFeedbackProvider";
import { MoveToRefProvider } from "./MoveToRefProvider";

const MainProvider = ({ children }: { children: ReactChild }) => {
  return (
    <MoveToRefProvider>
      <ControlFeedbackProvider>{children}</ControlFeedbackProvider>
    </MoveToRefProvider>
  );
};

export default MainProvider;
