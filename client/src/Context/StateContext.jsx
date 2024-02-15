import { createContext, useEffect, useState } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, setState] = useState(null);

  const stateValue = { state };

  return (
    <StateContext.Provider value={stateValue}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
