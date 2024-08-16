import { Row, Col, Form, message } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import style from "./index.module.less";
import { SimpleHeading } from "../../../Components/common/Heading";
import { TextBox } from "../../../Components/common/Forms/TextBox";
import { SimpleButton } from "../../../Components/common/Buttons";
import { SimpleParagraph } from "../../../Components/common/Paragraph";
import axios from "axios";
import { BASE_URL } from "../../../Constant";

const Register = () => {
  const [form] = Form.useForm();
  const [buttonLoading, setbuttonloading] = useState(false);
  const history = useHistory();

  const onFinishFailed = () => {
    console.log("Error!");
  };
  const onFinish = async (values) => {
    setbuttonloading(true);
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        userName: values.name,
        email: values.email,
        password: values.password,
      });

      if (response.status === 201) {
        message.success("Registration successful!");
        Cookies.set("accessToken", response?.data?.accessToken);
        Cookies.set("refreshToken", response?.data?.refreshToken);
        history.push("/products");
      }
    } catch (error) {
      console.log("error", error);
      message.error(error?.response?.data?.message);
    } finally {
      setbuttonloading(false);
    }
  };

  const handleClick = () => {
    history.push("/auth/login");
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
        <SimpleHeading heading="Register" size="2" weight={500} />
        <Row gutter={[8, 12]}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <TextBox
              type="text"
              name="name"
              placeholder="Enter name"
              label="Name:"
              validationKey="name"
            />
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <TextBox
              type="text"
              name="email"
              placeholder="Enter email"
              label="Email:"
              validationKey="email"
            />
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <TextBox
              type="password"
              name="password"
              placeholder="Enter password"
              label="Password:"
              validationKey="password"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <SimpleButton
              type="primary"
              size="small"
              shape="round"
              text={"Register"}
              hType="submit"
              loading={buttonLoading}
            />
          </Col>

          <Col lg={24} md={24} sm={24} xs={24}>
            <SimpleParagraph
              paragraph="Already have an account? Sign in"
              size="1"
              margin="20px 0px"
              css={style.signinText}
              onClick={handleClick}
            />
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default Register;
