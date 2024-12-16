"use client";
import React, { useRef, useState } from "react";
import Container from "./Container";
import { GoFileDirectory } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectArchive } from "../constant";
import { AnimatePresence, motion } from "motion/react";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const archiveRef = useRef<HTMLDivElement>(null);

  const displayArchive = showMore ? projectArchive : projectArchive.slice(0, 6);

  const handleShowArchive = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowMore((previous) => {
      if (previous) {
        archiveRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      return !previous;
    });
  };

  return (
    <Container id="archive" className={"pt-24 px-4"}>
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Other noteworthy projects
        </h1>
        <p className="text-center text-neon-greenish mt-2">view the archive</p>

        {/* Archive */}
        <div
          ref={archiveRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
        >
          {displayArchive.map((item, index) => (
            <AnimatePresence key={"sd" + item?.title}>
              <motion.div
                initial={{ opacity: 0, x: -3 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -3 }}
                transition={{ delay: index * 0.05 }}
                className="space-y-6 bg-neon-dark-blue p-6 rounded-lg shadow shadow-textBg group"
              >
                <div className=" flex justify-between">
                  <GoFileDirectory className="text-3xl text-designColor font-bold" />
                  <a href={item?.link} target="blank">
                    <FaExternalLinkAlt className="text-xl duration-300 hover:text-neon-blue cursor-pointer" />
                  </a>
                </div>
                <h1 className="text-3xl font-semibold group-hover:text-neon-greenish duration-300 h-9 line-clamp-1">
                  {item?.title}
                </h1>
                <p className="h-36 line-clamp-6">{item?.about}</p>
                <ul className="flex justify-start flex-wrap gap-4">
                  {item?.library.map((library, index) => (
                    <li
                      className="hover:text-designColor duration-300"
                      key={item?.title + index}
                    >
                      {library}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
        {/* Show Less Button */}
        {projectArchive.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleShowArchive}
              className="text-designColor border border-designColor px-4 py-2 rounded-lg hover:bg-hoverColor duration-300"
            >
              {showMore ? "Show less" : "Show less"}
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Archive;
