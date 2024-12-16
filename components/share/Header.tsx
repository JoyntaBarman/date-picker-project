import React from "react";
import Container from "../Container";
import NeonEffect from "../NeonEffect";
import NeonCircle from "../NeonCircle";
import Link from "next/link";

const Header = () => {
  return (
    <Container className="">
      <div className="w-full min-h-screen flex justify-center items-center relative bg-medium-gray/40 dark:bg-black-bg dark:text-very-light-gray overflow-hidden">
        {/* <Image src={headerSVG} alt="skj"/> */}
        <div className="text-center flex flex-col items-center py-24 ">
          <h1 className="lg:text-5xl text-3xl font-bold lg:w-2/4">
            Joynta Kumar Barman
          </h1>
          <p className="lg:w-3/4 px-4 mt-10 text-xl">
          I am a MERN stack developer with 1+ year experience. I also have fundamental knowledge about MySQL Database. I create user-friendly, responsive, pixel-perfect web application with MERN. I love to take challenges, opportunities and learn from there.
          </p>
          <div className="mt-12 z-10">
            
            <NeonEffect className="">
                <Link
                href={'https://github.com/joyntabarman'}
                target="_blank"
                  className="px-4 py-2 hover:text-neon-greenish duration-500 cursor-pointer "
                >
                  Check Out my project!
                </Link>
              </NeonEffect>
          </div>
        </div>
        <NeonCircle/>
      </div>
    </Container>
  );
};

export default Header;
