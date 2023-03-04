import React, { ChangeEvent } from "react";
import styles from "./Input.module.scss";
import { IInput } from "./types";

export const Input = ({ type, placeholder, setValue, value, ref, disabled, keyPress }: IInput): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue ? setValue(e.target.value) : null;
  };
  const onKeyPress = (e: any): void => {
    if (e.key === "Enter") {
      keyPress ? keyPress() : null;
    }
  };
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={styles.input}
      onChange={(e) => onChange(e)}
      ref={ref}
      disabled={!disabled}
      onKeyPress={(e) => onKeyPress(e)}
    />
  );
};
