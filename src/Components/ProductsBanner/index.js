import React from "react";
import style from "./index.module.less";
import { Row } from "antd";
import { SimpleHeading } from "../common/Heading";
import { SimpleParagraph } from "../common/Paragraph";
import { SimpleButton } from "../common/Buttons";

const ProductsBanner = () => {
  return (
    <Row>
      <div className={style.bannerSection}>
        <div className={style.bannerContent}>
          <SimpleHeading
            heading="Fake Shop"
            size="2.8"
            weight={400}
            cssClass={style.contentText}
          />
          <SimpleParagraph
            paragraph={"Buy latest gadget at discounted prices"}
            size={"1.1"}
            css={style.contentText}
          />
          <SimpleButton
            size="small"
            shape="round"
            text={"Coming Soon"}
            className={style.contentBtn}
          />
        </div>
      </div>
    </Row>
  );
};

export default ProductsBanner;
