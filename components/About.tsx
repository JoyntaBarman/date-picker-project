import React from "react";
import Container from "./Container";
import { FaCode } from "react-icons/fa";
import SectionTitle from "./SelectionTitle";

const About = () => {
  const technologis = [
    {
      title: "JavaScript(ES6)",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { title: "TypeScript", link: "https://www.typescriptlang.org/" },
    { title: "nodeJS", link: "https://nodejs.org/en" },
    { title: "TailwindCSS", link: "https://tailwindcss.com/" },
    { title: "ReactJS", link: "https://react.dev/" },
    { title: "NextJS", link: "https://nextjs.org/docs" },
    { title: "MongoDB", link: "https://www.mongodb.com/" },
    { title: "ExpressJS", link: "https://expressjs.com/" },
  ];
  return (
    <Container>
      <div
        id="about"
        className="w-full flex justify-center items-center relative bg-medium-gray/40 dark:bg-black-bg dark:text-very-light-gray overflow-hidden"
      >
        {/* <Image src={headerSVG} alt="skj"/> */}
        <div className="text-center flex flex-col items-center py-24">
          <SectionTitle title="About Me" />
          <p className="lg:w-3/4 px-4 mt-5">
            Hello! My name is Joynta Kumar Barman, and I am passionate about
            creating engaging and efficient web applications. My journey in web
            development began in 2022 when I was 3rd semester. Since then, I
            have been deeply interested in exploring and mastering modern web
            technologies. I recently completed my Diploma in Engineering in
            Computer Science and Technology (CST), which has strengthened my
            technical foundation and problem-solving skills. I enjoy turning
            ideas into reality through code and continuously strive to improve
            my skills by learning and working on real-world projects. I am
            enthusiastic about staying up-to-date with the latest trends in web
            development and contributing to projects that make a meaningful
            impact.
          </p>
          <br />

          <div className="max-w-3xl w-full px-5">
            <p className="text-left text-neon-blue">
              Here are some technology I have been working with recently:{" "}
            </p>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 ">
              {technologis.map((item) => (
                <a
                  key={item?.title}
                  className="opacity-80 hover:opacity-100 group flex gap-1 items-center duration-200 text-center"
                  href={item.link}
                  target="_blank"
                >
                  <FaCode
                    className="
                text-designColor/80 opacity-80 group-hover:opacity-100 duration-200 "
                  />
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
