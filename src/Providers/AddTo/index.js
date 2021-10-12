import { createContext, useState, useContext } from "react";

const AddToContext = createContext();

export const AddToProvider = ({ children }) => {
  const [addTo, setAddTo] = useState({});

  return (
    <AddToContext.Provider value={{ addTo, setAddTo }}>
      {children}
    </AddToContext.Provider>
  );
};

export const useAddTo = () => useContext(AddToContext);
