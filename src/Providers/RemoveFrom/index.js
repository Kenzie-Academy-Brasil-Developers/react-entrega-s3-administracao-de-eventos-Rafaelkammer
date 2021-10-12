import { createContext, useState, useContext } from "react";

const RemoveFromContext = createContext();

export const RemoveFromProvider = ({ children }) => {
  const [removeFrom, setRemoveFrom] = useState({});

  return (
    <RemoveFromContext.Provider value={{ removeFrom, setRemoveFrom }}>
      {children}
    </RemoveFromContext.Provider>
  );
};

export const useRemoveFrom = () => useContext(RemoveFromContext);
