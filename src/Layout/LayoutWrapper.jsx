import React from "react";
import { Layout } from "antd";
import style from "./index.module.less";
import LayoutHeader from "./Header";
import LayoutFooter from "./Footer";
const { Header, Content, Footer } = Layout;

const LayoutWrapper = ({ children }) => {
  // const pageName = window.location.pathname.replace(/\//g, "");

  return (
    <div>
      <Layout>
        <Header className={style.header}>
          <LayoutHeader />
        </Header>
        <Content>{children}</Content>
        <Footer className={style.footer}>
          <LayoutFooter />
        </Footer>
      </Layout>
    </div>
  );
};

export default LayoutWrapper;
