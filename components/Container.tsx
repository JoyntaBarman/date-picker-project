import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const Container = ({ className, children, id }: Props) => {
  return (
    <div id={id} className={twMerge("container mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
