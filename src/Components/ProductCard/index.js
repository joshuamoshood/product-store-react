import { Card } from "antd";
import React, { useState } from "react";
import { SimpleHeading } from "../common/Heading";
import style from "./index.module.less";
import { SimpleParagraph } from "../common/Paragraph";
import { SimpleButton } from "../common/Buttons";
import { placeholderImageUrl } from "../../Constant";
import { checkURL } from "../../Functions";
const { Meta } = Card;

const ProductCard = ({ product, loading }) => {
  const [visible, setVisible] = useState(false);

  const handleHoverEnter = () => {
    setVisible(true);
  };

  const handleHoverExit = () => {
    setVisible(false);
  };

  return (
    <div>
      <Card
        hoverable
        cover={
          <img
            alt="coverImage"
            src={checkURL(product.image) ? product.image : placeholderImageUrl}
            style={{ height: "200px", objectFit: "cover" }}
          />
        }
        className={visible ? style.hover : style.card}
        loading={loading}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverExit}
      >
        <Meta
          title={
            <SimpleHeading
              heading={product.name}
              size={"1.25"}
              weight={"500"}
              cssClass={style.cardContent}
            />
          }
          description={
            <div className={style.cardDescription}>
              <SimpleParagraph
                paragraph={`$${product.price}`}
                size={"1"}
                weight={"400"}
                css={style.cardContent}
              />
              {visible && (
                <a href={`/products/list/${product._id}`}>
                  <SimpleButton
                    type="primary"
                    size="small"
                    shape="round"
                    text={"View"}
                  />
                </a>
              )}
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default ProductCard;
