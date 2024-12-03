import React from "react";
import Container from "../Container";
import NeonEffect from "../NeonEffect";
import NeonCircle from "../NeonCircle";

const Header = () => {
  return (
    <Container>
      <div className="w-full min-h-[600px]  flex justify-center items-center relative bg-medium-gray/40 dark:bg-black-bg dark:text-very-light-gray overflow-hidden">
        {/* <Image src={headerSVG} alt="skj"/> */}
        <div className="text-center flex flex-col items-center">
          <h1 className="lg:text-5xl text-3xl font-bold lg:w-2/4">
            Let's See Your Talent in Action!
          </h1>
          <p className="lg:w-3/4 px-4 mt-10 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia
            eligendi nostrum provident impedit quibusdam, iusto doloribus
            veritatis dolore dolor rem nemo? Odio, enim voluptas. Facere dolorem
            consequatur id praesentium nemo eos, blanditiis repellendus
            explicabo quis repudiandae ipsam aut tenetur quaerat asperiores
            placeat mollitia voluptates doloremque.
          </p>
          <div className="mt-12">
            <NeonEffect>
              <button className="text-xl font-semibold px-4 py-2 hover:bg-gradient-to-tr hover:from-neon-greenish hover:to-neon-blue to-80% bg-clip-text hover:text-transparent duration-500 z-50">Learn more</button>
            </NeonEffect >
          </div>
        </div>
        <NeonCircle/>
      </div>
      
    </Container>
  );
};

export default Header;
