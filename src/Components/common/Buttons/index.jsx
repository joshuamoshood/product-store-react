import React from "react";
import { Button, Image } from "antd";
import styles from "./index.module.less";

export const SimpleButton = ({
  size = "default",
  type = "primary",
  shape,
  text = "Button",
  onClick,
  disabled,
  hType = "button",
  loading,
  icon,
  className,
  href,
  target,
  imageSource,
}) => (
  <Button
    className={`${className} ${styles.ButtonHeight}`}
    block
    type={type}
    shape={shape}
    size={size}
    disabled={disabled}
    onClick={onClick}
    htmlType={hType}
    loading={loading}
    icon={icon}
    href={href}
    target={target}
  >
    {text}
    {imageSource && (
      <Image
        src={imageSource}
        preview={false}
        alt="icon"
        style={{ paddingLeft: "10px" }}
      />
    )}
  </Button>
);
