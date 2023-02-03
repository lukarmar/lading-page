/* eslint-disable no-console */
import {
  useCallback,
  useState,
  RefObject,
  createContext,
  ReactChild,
  useContext,
} from "react";

interface PropsRefElements {
  [key: string]: RefObject<HTMLDivElement>;
}

interface MoveToRef {
  refElements: PropsRefElements;
  applicateRef(efElement: RefObject<HTMLDivElement>): void;
}

const MoveToRefContext = createContext<MoveToRef>({} as MoveToRef);

const MoveToRefProvider = ({ children }: { children: ReactChild }) => {
  const [dataRefs, setDataRefs] = useState<PropsRefElements>({});

  const applicateRef = useCallback(
    (refElement: RefObject<HTMLDivElement>) => {
      setDataRefs((prevState) => {
        const keyItem = refElement.current?.id as string;
        return {
          ...prevState,
          [keyItem]: refElement,
        };
      });
    },
    [setDataRefs]
  );

  return (
    <MoveToRefContext.Provider value={{ refElements: dataRefs, applicateRef }}>
      {children}
    </MoveToRefContext.Provider>
  );
};

function useMoveToTef(): MoveToRef {
  const context = useContext(MoveToRefContext);

  if (!context) {
    throw new Error("useMoveToRef must be used within an MoveToRefProvider");
  }

  return context;
}

export { MoveToRefProvider, useMoveToTef };
