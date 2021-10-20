import React from "react";
import "./pageheader.scss";
import bg from "../../assets/bgj.jpg";
const PageHeader = (props) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h1> {props.children}</h1>
    </div>
  );
};

export default PageHeader;
