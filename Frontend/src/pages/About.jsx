import React from 'react';

const About = () => {
  return (
    <div className='h-screen bg-neutral-900 p-[0.5cm] lg:flex lg:items-center overflow-scroll'>
      <div className="container bg-black mx-auto flex px-5 py-12 md:flex-row flex-col rounded-[10px] items-center shadow-xl shadow-neutral-500 lg:flex lg:justify-center">
        <div className="lg:flex md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-[1cm] font-medium text-blue-500">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I am currently pursuing a Bachelor of Technology in Computer Science and Engineering, in my third year at Sister Nivedita University. My interests revolve around web development, creative problem solving, and exploring emerging technologies that shape the future of digital experiences. I'm passionate about staying up-to-date with industry trends and contributing to tech communities that foster growth and innovation.          </p>
          <p className="mb-8 leading-relaxed">
            Outside of coding, I find joy in creative pursuits like drawing and immersing myself in music. These hobbies not only refresh my mind but often spark unexpected inspiration for my projects. Whether sketching ideas on paper or winding down with a favorite playlist, I believe that nurturing creativity in all its forms helps me stay balanced and brings fresh energy to my work.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded-2xl border-[6px] border-blue-500" alt="hero" src="/pic.png" />
        </div>
      </div>
    </div>
  );
};

export default About;