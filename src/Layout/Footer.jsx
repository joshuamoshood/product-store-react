import { Row } from "antd";
import React from "react";
import { SimpleParagraph } from "../Components/common/Paragraph";
import style from "./index.module.less";

const Footer = () => {
  return (
    <Row className={style.footerWrapper}>
      <svg
        className="d-block mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
        <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
        <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
        <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
        <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
        <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
      </svg>
      <SimpleParagraph
        paragraph="Copyright © 2024. All rights reserved."
        size="0.9"
        css={style.footerPara}
      />
    </Row>
  );
};

export default Footer;
