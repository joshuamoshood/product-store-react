import React, { useEffect, useState } from "react";
import { Col, Empty, Row, Skeleton } from "antd";
import style from "./index.module.less";
import { useParams } from "react-router-dom";
import { SimpleHeading } from "../../Components/common/Heading";
import { SimpleParagraph } from "../../Components/common/Paragraph";
import { SimpleButton } from "../../Components/common/Buttons";
import { BASE_URL, placeholderImageUrl } from "../../Constant";
import axios from "axios";
import { checkURL } from "../../Functions";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProductById = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products/list/${id}`);
      if (response.status === 200) {
        setProductDetails(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
    return () => {
      setProductDetails(null);
    };
  }, [id]);

  return (
    <div className={style.productDetailsContainer}>
      {loading ? (
        <Skeleton />
      ) : productDetails ? (
        <Row gutter={[12, 24]} className={style.mt10}>
          <Col xs={24} sm={24} md={24} lg={13} xl={13}>
            <img
              src={
                checkURL(productDetails.image)
                  ? productDetails.image
                  : placeholderImageUrl
              }
              width={"100%"}
              alt="coverImage"
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} xl={11}>
            <div className={style.productContentContainer}>
              <SimpleHeading
                heading={productDetails.name}
                size={"2.5"}
                weight={"500"}
                cssClass={style.productContent}
              />
              <SimpleParagraph
                paragraph={`$${productDetails.price}`}
                size={"1"}
                weight={"400"}
                css={style.productContent}
              />
              <SimpleParagraph
                paragraph={productDetails.description || ""}
                size={"1"}
                weight={"400"}
                css={style.productDetails}
              />
              <SimpleButton
                type="primary"
                size="small"
                shape="round"
                text={"Add to Cart"}
              />
            </div>
          </Col>
        </Row>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default ProductDetails;
