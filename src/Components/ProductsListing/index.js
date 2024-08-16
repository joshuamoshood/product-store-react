import React, { useState, useEffect } from "react";
import { Col, Row, Skeleton } from "antd";
import style from "./index.module.less";
import ProductCard from "../ProductCard";
import { BASE_URL } from "../../Constant";
import axios from "axios";

const ProductsListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      if (response.status === 200) {
        setProducts(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={style.productsContainer}>
      <Row gutter={[30, 24]}>
        {loading ? (
          <Skeleton />
        ) : (
          products.map((item, index) => {
            return (
              <Col key={index + 1} xl={8} lg={8} md={12} sm={24} xs={24}>
                <ProductCard product={item} loading={false} />
              </Col>
            );
          })
        )}
      </Row>
    </div>
  );
};

export default ProductsListing;
