import React from "react";

import { LineProps } from "./index.type";

const Line: React.FC<LineProps> = ({ color, type, className }) => {
  return (
    <div
      className={`${
        type === "solid"
          ? "border-solid"
          : type === "dashed"
          ? "border-dashed"
          : ""
      }  ${color ? `border-${color}-400` : ""} ${
        className ? className : ""
      } mt-2 border-b `}
    ></div>
  );
};

export default Line;
