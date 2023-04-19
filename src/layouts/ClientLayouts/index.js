import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "src/layouts/ClientLayout/Header";

const ClientLayout = () => {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLayout;
