import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    // <button type="button" className={"btn btn-" + color} onClick={onClick}>
    <button
      type="button"
      className={[styles.bttn, styles["bttn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
