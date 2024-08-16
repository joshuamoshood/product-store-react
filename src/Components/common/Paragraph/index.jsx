import React from "react";
import styles from "./index.module.less";

export const SimpleParagraph = ({
  paragraph,
  size,
  bold,
  margin,
  css,
  onClick,
}) => (
  <h1
    onClick={onClick && onClick}
    className={`${styles.simpleParagraph} ${css}`}
    style={{
      margin,
      fontSize: `${size}rem`,
      fontWeight: bold && "bold",
    }}
  >{`${paragraph} `}</h1>
);
