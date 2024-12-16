"use client";
import React, { useState } from "react";
import Container from "../Container";
import Link from "next/link";
import NeonEffect from "../NeonEffect";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import { logo } from "@/app/assets/images";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const taggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  const navlinks = [
    { path: "#home", text: "Home" },
    { path: "#about", text: "About Me" },
    { path: "#experience", text: "Experience" },
    { path: "#project", text: "Project" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <Container className="relative">
        <div className="absolute w-full">
          <nav className="flex justify-between items-center px-4 py-4 bg-medium-gray/60 dark:bg-black-bg text-very-light-gray z-50 relative">
            <div>
              <Link  href="/" className="flex items-center ">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-12 mb-3 object-cover"
                />
                <span className="font-bold md:text-2xl text-neon-greenish">
                  Joynta
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <NeonEffect left={false} right={false}>
                <div className="flex items-center px-12 overflow-visible">
                  {navlinks.map((link, index) => {
                    return (
                      <Link
                        key={index}
                        href={link?.path}
                        className=" px-3 font-semibold hover:text-neon-greenish duration-500"
                      >
                        {link?.text}
                      </Link>
                    );
                  })}
                </div>
              </NeonEffect>
            </div>
            <div className="flex items-center gap-5 relative">
              <NeonEffect className="px-5">
                <Link
                  href={"/joyntakumarbarman.pdf"}
                  target="_blank"
                  className="px-4 py-2 hover:text-neon-greenish duration-500"
                >
                  Resume
                </Link>
              </NeonEffect>
              <button
                onClick={taggleMenu}
                className=" inline-block md:hidden hover:text-neon-blue duration-300 "
              >
                <MdMenu size={32} />
              </button>

              {/* mobile menu */}
              {isVisible && (
                <div className="absolute top-full right-0 bg-medium-gray rounded-lg py-2 px-4 flex flex-col z-50">
                  {navlinks.map((link, index) => {
                    return (
                      <Link
                        key={index}
                        href={link?.path}
                        className=" p-2 font-semibold hover:text-neon-greenish duration-500"
                      >
                        {link?.text}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>
          <div className="absolute w-full h-full bottom-0 opacity-30 blur bg-gradient-to-t from-neon-blue to-transparent z-10" />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
