import { createContext, useState } from "react";
import estate_data from "../backend/data";

export const GlobalContext = createContext({});

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(estate_data);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};
