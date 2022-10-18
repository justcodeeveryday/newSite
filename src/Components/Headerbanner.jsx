import React from "react";
import Gavel from "@material-ui/icons/Gavel";
import Home from "@material-ui/icons/Home";
import People from "@material-ui/icons/People";

function HeaderBanner() {
  return (
    <div id="banner">
      <span>
        {" "}
        <Gavel fontSize="large" />
      </span>
      <span>
        <Home fontSize="large" />{" "}
      </span>
      <span>
        <People fontSize="large" />
      </span>
    </div>
  );
}

export default HeaderBanner;
