import React from "react";
import Container from "../Container";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import BorderEffect from "../BorderEffect";
import Link from "next/link";
import NeonEffect from "../NeonEffect";

const Footer = () => {
  return (
    <Container className="py-10 bg-medium-gray/50 dark:bg-black-bg">
      <NeonEffect left={false} right={false}>
        <div className="dark:bg-black-bg py-10">
          <div className="flex justify-center items-center ">
            <h1 className="font-bold text-xl md:text-2xl bg-gradient-to-tr from-neon-greenish to-neon-blue to-80% bg-clip-text text-transparent">
              Website Logo
            </h1>
          </div>
          {/* middle */}
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div className="flex gap-4 items-center text-2xl text-medium-gray justify-center">
              <FaTwitter />
              <FaInstagram />
              <FaFacebook />
              <FaGoogle />
              <FaWhatsapp />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <h1 className="text-2xl text-medium-gray">Subscribe</h1>

              <div className="relative">
                <input
                  className="bg-transparent outline-none px-4 py-2"
                  placeholder="Enter your email."
                />
                <BorderEffect className="w-full absolute top-0" />
                <BorderEffect className="w-full absolute bottom-0" />
                <BorderEffect
                  className={`w-1/4 absolute left-0 top-1/2 rotate-90 -translate-x-1/2 `}
                />
                <BorderEffect
                  className={` w-1/4 absolute right-0 top-1/2 rotate-90 translate-x-1/2 `}
                />
              </div>
              <button>
                <div className="relative w-10 h-10">
                  <BorderEffect className="w-10 absolute top-1/2" />
                  <BorderEffect
                    className={`w-10 absolute left-0 top-1/2 rotate-90 `}
                  />
                </div>
              </button>
            </div>
          </div>
          {/* End */}
          <div className="flex items-center justify-center flex-wrap gap-5 mt-8">
            <Link href={"/about"} className="hover:text-neon-blue duration-300">
              About Us
            </Link>
            <Link
              href={"/feature"}
              className="hover:text-neon-blue duration-300"
            >
              Feature
            </Link>
            <Link
              href={"/cookie"}
              className="hover:text-neon-blue duration-300"
            >
              Cookie
            </Link>
            <Link href={"/faq"} className="hover:text-neon-blue duration-300">
              FAQ
            </Link>
          </div>
          <p className="text-center text-sm mt-5 text-medium-gray">
            @ coppy right by 2024
          </p>
        </div>
      </NeonEffect>
    </Container>
  );
};

export default Footer;
