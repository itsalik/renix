import { CardProps } from "./index.types";

import { FC } from "react";

const Card: FC<CardProps> = ({
  className,
  headerChildren,
  children,
  withImage,
}: any) => {
  return (
    <div
      className={`relative text-left flex flex-col gap-2 bg-black py-2.5 px-4 w-full ${
        className ? className : ""
      }`}
    >
      {headerChildren && (
        <div className="header dark:border-b dark:border-gray-400 border-white pb-2">
          {headerChildren}
        </div>
      )}
      <div
        className={`${
          children
            ? ""
            : "py-3 px-6 flex items-center justify-center text-red-400"
        }`}
      >
        {children ? children : "No data!"}
      </div>
    </div>
  );
};
export default Card;
