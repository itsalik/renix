import React from "react";

export interface CardProps {
  headerChildren?: React.ReactNode | React.ComponentType<any>;
  children?: React.ReactNode;
  withImage?: boolean;
  className?: React.ReactNode;
}
