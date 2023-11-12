import React from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div className="myBgError"></div>
    </>
  );
};

export default NotFound;
