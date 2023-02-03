/* eslint-disable no-console */
import {
  useCallback,
  useState,
  createContext,
  ReactChild,
  useContext,
} from "react";

interface ControlFeedback {
  isOpen: boolean;
  isOpenFeedbackModal: boolean;
  onCloseState(): void;
  onToggleState(): void;
  onChangeStateFeedbackModal(timeClose: number): void;
}

const ControlFeedbackContext = createContext<ControlFeedback>(
  {} as ControlFeedback
);

const ControlFeedbackProvider = ({ children }: { children: ReactChild }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenFeedbackModal, setisOpenFeedbackModal] =
    useState<boolean>(false);

  const onChangeStateFeedbackModal = useCallback(
    (timeClose: number) => {
      setisOpenFeedbackModal(true);

      setTimeout(() => {
        setisOpenFeedbackModal(false);
      }, timeClose);
    },
    [setisOpenFeedbackModal]
  );

  const onToggleState = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  const onCloseState = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <ControlFeedbackContext.Provider
      value={{
        onToggleState,
        isOpen,
        isOpenFeedbackModal,
        onCloseState,
        onChangeStateFeedbackModal,
      }}
    >
      {children}
    </ControlFeedbackContext.Provider>
  );
};

function useStateControlFeedback(): ControlFeedback {
  const context = useContext(ControlFeedbackContext);

  if (!context) {
    throw new Error(
      "useStateControlFeedback must be used within an ControlFeedbackContext"
    );
  }

  return context;
}

export { ControlFeedbackProvider, useStateControlFeedback };
