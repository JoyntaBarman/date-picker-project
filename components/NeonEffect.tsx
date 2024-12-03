"use client";
import React, { useEffect, useRef } from "react";
import BorderEffect from "./BorderEffect";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  left?: boolean;
  right?: boolean;
  buttom?: boolean;
}

const NeonEffect = ({
  children,
  top = true,
  left = true,
  right = true,
  buttom = true,
}: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);

 

  return (
    <div
      ref={parentRef}
      className="relative w-full h-full flex justify-center items-center"
    >
      {children}
      {top && <BorderEffect className="w-full absolute top-0" />}
      {buttom && <BorderEffect className="w-full absolute bottom-0" />}
      {left && (
        <BorderEffect className={`absolute left-0 top-1/2 rotate-90 -translate-x-1/2 `} />
      )}
      {right && (
        <BorderEffect className=" absolute right-0 top-1/2 rotate-90 translate-x-1/2" />
      )}
    </div>
  );
};

export default NeonEffect;
