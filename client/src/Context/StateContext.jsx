import { createContext, useEffect, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, setState] = useState("test");

  const stateValue = { state };

  return (
    <StateContext.Provider value={stateValue}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
