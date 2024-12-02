"use client";
import BorderEffect from "@/components/BorderEffect";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    // document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light");
    console.log(document.documentElement);
    // console.log(document.documentElement.classList.add("myclass "));
  }, []);
  return (
    <div className="w-full h-screen bg-black-bg">
      <div className="flex justify-center items-center pt-20">
        <BorderEffect className="w-96"/>
      </div>
    </div>
  );
};

export default page;
