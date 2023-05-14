import React from "react";
export interface ButtonProps {
  text?: React.ReactNode;
  type?: "primary" | "success" | "info" | "warning" | "danger";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
