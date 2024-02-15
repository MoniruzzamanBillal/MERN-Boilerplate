import React, { useContext } from "react";
import { StateContext } from "../Context/StateContext";
const UseStateHook = () => {
  return useContext(StateContext);
};

export default UseStateHook;
