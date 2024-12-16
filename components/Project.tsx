import React from "react";
import Container from "./Container";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/constant/index";
import SectionTitle from "./SelectionTitle";
import Image from "next/image";

const Project = () => {
  return (
    <Container id="project" className={"py-24 px-4"}>
      <SectionTitle title={"Projects"}  />
      <div className="mt-10 space-y-24">
        {projects.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col  gap-8  ${
              item?.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className=" w-full lg:w-1/2 ">
              <a
                className="w-full lg:w-1/2  object-cover relative group"
                href={item?.link}
                target="_blank"
              >
                <Image
                  className="w-full  object-cover rounded-lg aspect-video"
                  src={item?.image}
                  alt="Project"
                />
                <div className="absolute top-0 left-0 bg-designColor/10 w-full h-full rounded-lg group-hover:opacity-0 duration-300" />
              </a>
            </div>

            <div
              className={`w-full lg:w-1/2 flex flex-col ${
                item?.rightImage
                  ? "items-start lg:-mr-20"
                  : "items-end text-right lg:-ml-20"
              }  gap-4 lg:gap-0 justify-between`}
            >
              <p className="text-neon-blue">
                Feature Project
                <span className="text-2xl font-medium tracking-wide block text-white">
                  {item?.name}
                </span>
              </p>

              <div
                className={`p-6 bg-neon-dark-blue rounded-lg z-10 ${
                  !item?.rightImage ? "text-right" : ""
                }`}
              >
                {item?.description}
              </div>
              <ul className="flex justify-between items-center flex-wrap gap-4 text-center">
                {item?.library.map((lib, index) => (
                  <li key={index} className="cursor-pointer hover:text-designColor duration-200 ml-auto">
                    {lib}
                  </li>
                ))}
              </ul>

              <a
                href={item?.link}
                target="blank"
                className="hover:text-designColor cursor-pointer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Project;
