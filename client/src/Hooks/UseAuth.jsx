import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
