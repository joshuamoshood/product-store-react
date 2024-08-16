import { Col, Row } from "antd";
import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { LogoutOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import style from "./index.module.less";
import MenuItem from "../Components/common/MenuItem";

const Header = () => {
  const isMobile = useWindowWidth() > 1150;
  const isLoggedIn = false;
  const auth = localStorage.getItem("admin");
  let history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div>
      <Row>
        <Col lg={6} md={6} sm={6} xs={6} className={style.flex}>
          <Link to="/products">
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
          </Link>
        </Col>
        {isMobile ? (
          <Col lg={18}>
            <div
              style={{
                display: "flex",
                margin: "0rem 1rem",
                justifyContent: "flex-end",
              }}
            >
              <MenuItem />
            </div>
          </Col>
        ) : (
          <Col md={18} lg={18} sm={18} xs={18} style={{ textAlign: "right" }}>
            {isLoggedIn || auth ? (
              <LogoutOutlined
                className={style.logoutIcon}
                onClick={() => handleLogout()}
              />
            ) : null}
            <UnorderedListOutlined onClick={() => {}} />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Header;
