import { Row, Col, Form, message } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "./index.module.less";
import { SimpleButton } from "../../Components/common/Buttons";
import { SimpleHeading } from "../../Components/common/Heading";
import { NumberField, TextBox } from "../../Components/common/Forms/TextBox";
import { Textarea } from "../../Components/common/Forms/TextArea";
import { BASE_URL } from "../../Constant";

const AddListings = () => {
  const [form] = Form.useForm();
  const [buttonLoading, setbuttonloading] = useState(false);
  const history = useHistory();

  const onFinishFailed = () => {
    console.log("Error!");
  };
  const onFinish = async (values) => {
    setbuttonloading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/products/create`,
        {
          name: values.name,
          description: values.description,
          price: values.price,
          image: values.imageURL,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        form.resetFields();
        history.push("/products");
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      setbuttonloading(false);
    }
  };
  return (
    <Form
      scrollToFirstError={true}
      form={form}
      layout="vertical"
      autoComplete="off"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className={style.pageWrapper}>
        <SimpleHeading heading="Create a New Product" size="2" weight={500} />
        <Row gutter={[8, 12]}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <TextBox
              type="text"
              name="name"
              placeholder="Enter Product Name"
              label="Name:"
              validationKey="name"
            />
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Textarea
              name="description"
              label="Desciption:"
              placeholder="Enter Product Description"
              maxLength={5000}
            />
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <NumberField
              name="price"
              placeholder="Enter Product Price"
              label="Price:"
              validationKey="price"
            />
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <TextBox
              type="text"
              name="imageURL"
              placeholder="Enter Product Image"
              label="Image URL:"
              validationKey="image"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <SimpleButton
              type="primary"
              size="small"
              shape="round"
              text={"Create Product"}
              hType="submit"
              loading={buttonLoading}
            />
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default AddListings;
