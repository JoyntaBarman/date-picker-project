"use client"
import React, { useState } from 'react';
import Container from './Container';
import SectionTitle from './SelectionTitle';

const Experience = () => {
  const [selectedExperiences, setSelectedExperiences] = useState('JavaScript');

  const experiences = [
    {
      title: 'JavaScript',
      about:
        'I learn JavaScript since 2 year+. I have a strong JavaScript core concept like Hosting, Scope, Callback, closure, promise, Async & await, web APIs, Call stack, callback queue etc. As a MERN stack developer JavaScript use everywhere that sharp my JavaScript knowledge.',
    },
    {
      title: 'ReactJs',
      about:
        "React is JS library. That is used for building user interface. It's divide your user Interface into component. Component can be dynamic for use many time it's called reusable component.  ",
    },
    {
      title: 'NodeJs',
      about:
        'NodeJs is a JavaScript runtime. Javascript can run only browser but if we want to run JS code other then NodeJS works. Because NodeJs nothing but a V8 engine (js engine).',
    },
    { title: 'ExpressJs', about: 'ExpressJs is a nodeJS framework. It help to create nodejs API easily. Raw nodejs are huge and ExpressJs make it easy. ' },
  ];

  const handleSelectedExperience = (experience: string) => {
    setSelectedExperiences(experience);
  };

  return (
    <Container id={'experience'} className={'max-w-2xl px-4 py-24'}>
      <SectionTitle title={'My Experiences'} />
      <div className="flex flex-col lg:flex-row gap-16 mt-10">
        <ul className="flex flex-col">
          {experiences.map((item) => (
            <li
              key={item?.title}
              onClick={() => handleSelectedExperience(item?.title)}
              className={`${
                selectedExperiences === item?.title
                  ? 'border-l-2 border-neon-greenish text-neon-greenish  '
                  : 'border-l-2 border-hoverColor'
              } cursor-pointer hover:bg-neon-blue/10 px-3 py-2 font-medium`}
            >
              {item?.title}
            </li>
          ))}
        </ul>
        <div>
          {experiences.map((item, index) => (
            <p
              key={index}
              className={`${
                selectedExperiences === item?.title ? 'inline' : 'hidden'
              }`}
            >
              {item.about}
            </p>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Experience;
