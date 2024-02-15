import React from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="rootPageContainer">
      {/* nav container starts  */}
      <div className="navContainer bg-red-300  ">
        <h1>nav bar </h1>
        <h1>nav bar </h1>
        <h1>nav bar </h1>
        <h1>nav bar </h1>
      </div>

      {/* main body  */}
      <div className="bodyContainer">
        <Outlet />
      </div>

      {/* footer container  */}
      <div className="footerContainer bg-sky-300  ">
        <h1>footer container </h1>
        <h1>footer container </h1>
        <h1>footer container </h1>
      </div>
    </div>
  );
};

export default RootPage;
