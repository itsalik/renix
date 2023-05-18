import React, { AnchorHTMLAttributes } from "react";

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  to?: string;
  type?: "primary" | "success" | "info" | "warning" | "danger";
  text?: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
}





