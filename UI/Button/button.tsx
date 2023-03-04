import React from "react";
import { motion } from "framer-motion";
import style from "./Button.module.scss";
import { IButton } from "./types";

export const Button = ({ title, callback, disabled }: IButton): JSX.Element => (
  <motion.div
    className={style.button}
    onClick={callback}
    style={disabled ? { pointerEvents: "none" } : { pointerEvents: "all" }}
  >
    <span>{title}</span>
  </motion.div>
);
