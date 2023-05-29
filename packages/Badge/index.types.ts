import React from "react";

export interface BadgeProps {
  value?: number | string;
  max?: number;
  isDot?: boolean;
  type?: 'primary' | 'warning';
  children?: React.ReactNode;
  className?:string;
  dir?: 'right' | 'left';
}
