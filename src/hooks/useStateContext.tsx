import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextProviderProp {
  children?: React.ReactNode;
}

interface ContextProp {
  context: ContextItem;
  setContext: Dispatch<SetStateAction<ContextItem>>;
}
interface ContextItem {
  isDarkMode: boolean;
  searchInput?: string;
}

const defaultContext: ContextProp = {
  context: {
    isDarkMode: false,
    searchInput: "",
  },
  setContext: (context) => {},
};

export default function useStateContext() {
  const { context, setContext } = useContext(stateContext);

  return {
    context,
    setContext: (item: object) => {
      setContext({ ...context, ...item });
    },
  };
}

export const stateContext = createContext(defaultContext);

export function ContextProvider({ children }: ContextProviderProp) {
  const [context, setContext] = useState(defaultContext.context);

  return (
    <stateContext.Provider value={{ context, setContext }}>
      {children}
    </stateContext.Provider>
  );
}
