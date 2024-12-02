"use client";
import React from "react";
import Container from "../Container";
import Link from "next/link";
import NeonEffect from "../NeonEffect";

const Navbar = () => {
  const navlinks = [
    { path: "/", text: "Home" },
    { path: "/form", text: "Form" },
    { path: "/about", text: "about" },
  ];

  return (
    <Container>
      <nav className="flex justify-between items-center gap-5 px-4 py-5">
        <div>
          <Link href="/">
            <h1 className="font-bold text-xl bg-gradient-to-tr from-neon-greenish to-neon-blue to-80% bg-clip-text text-transparent">
              Website Logo
            </h1>
          </Link>
        </div>
        <div className="">
          <NeonEffect left={false} right={false}>
            <div className="flex items-center gap-5 px-12 overflow-visible">
              {navlinks.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link?.path}
                    className="text-xl p-2 font-semibold hover:bg-gradient-to-tr hover:from-neon-greenish hover:to-neon-blue to-80% bg-clip-text hover:text-transparent duration-500"
                  >
                    {link?.text}
                  </Link>
                );
              })}
            </div>
          </NeonEffect>
        </div>
        <div>
          <NeonEffect>
            <button className="px-4 py-2 hover:bg-gradient-to-tr hover:from-neon-greenish hover:to-neon-blue to-80% bg-clip-text hover:text-transparent duration-500">
              Contact Us
            </button>
          </NeonEffect>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
