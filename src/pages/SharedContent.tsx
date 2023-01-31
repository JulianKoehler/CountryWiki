import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const SharedContent = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export default SharedContent;
