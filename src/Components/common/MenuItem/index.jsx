import React from "react";
import { Menu } from "antd";
import { SimpleParagraph } from "../Paragraph";
import style from "./index.module.less";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <Link to="/">
        <SimpleParagraph
          paragraph="About"
          size="1"
          bold
          css={style.letterSpacing}
        />
      </Link>
    ),
    key: "about",
  },
  {
    label: (
      <Link to="/products">
        <SimpleParagraph
          paragraph="Products"
          size="1"
          bold
          css={style.letterSpacing}
        />
      </Link>
    ),
    key: "products",
  },
  {
    label: (
      <Link to="/auth/login">
        <SimpleParagraph
          paragraph="Admin"
          size="1"
          bold
          css={style.letterSpacing}
        />
      </Link>
    ),
    key: "admin",
  },
  {
    label: (
      <Link to="/products/create">
        <SimpleParagraph
          paragraph="Add Products"
          size="1"
          bold
          css={style.letterSpacing}
        />
      </Link>
    ),
    key: "add",
  },
];

const MenuItem = () => {
  const [current, setCurrent] = React.useState("about");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className={style.MenuItemWrapper}
    />
  );
};

export default MenuItem;
