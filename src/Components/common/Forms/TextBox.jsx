import React from "react";
import { Form, Input, InputNumber } from "antd";
import style from "./index.module.less";
import { checkURL } from "../../../Functions";

const validation = {
  email: {
    required: true,
    type: "email",
    message: "Please enter valid email",
  },
  password: {
    required: true,
    message: "Please enter valid password",
  },
  name: {
    required: true,
    message: "Please enter product name",
  },
  description: {
    required: true,
    message: "Please add product description",
  },
  price: {
    required: true,
    message: "Please enter product price",
  },
  image: {
    required: true,
    validator: (_, value) =>
      checkURL(value)
        ? Promise.resolve()
        : Promise.reject(new Error("Please enter valid image URL")),
  },
  notCompulsory: {
    required: false,
  },
};
export const TextBox = ({
  label,
  placeholder = "Placeholder",
  type = "text",
  validationKey,
  name,
  id,
  hasFeedback = "false",
  dependencies = "",
  className,
  change = "",
  value,
  disabled,
}) => {
  let validator;
  if (validationKey) {
    validator = validation[validationKey];
  }
  return (
    <Form.Item
      label={label}
      rules={[validator]}
      required={false}
      name={name}
      hasFeedback={hasFeedback}
      dependencies={[dependencies]}
      validateTrigger="onBlur"
      className={style.textBoxWrapper}
      initialValue={value}
    >
      {type !== "password" ? (
        <Input
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          onChange={change || null}
          type={type}
        />
      ) : (
        <Input.Password placeholder={placeholder} />
      )}
    </Form.Item>
  );
};

export const NumberField = ({
  name,
  validationKey,
  label,
  placeholder,
  value,
  addOnAfter,
}) => {
  const validator = validationKey && validation[validationKey];

  return (
    <Form.Item
      name={name}
      rules={[validator]}
      validateTrigger="onBlur"
      initialValue={value}
      required={false}
      className={style.textBoxWrapper}
      label={label}
    >
      <InputNumber
        max={100000}
        min={0}
        addonAfter={addOnAfter}
        controls={true}
        placeholder={placeholder}
        className={style.inputNumberField}
      />
    </Form.Item>
  );
};
