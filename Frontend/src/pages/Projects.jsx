import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-900 text-white overflow-scroll">
      <section className="text-gray-300 body-font">
        <div className="container px-8 py-24 mx-auto">
          <div className="flex flex-wrap gap-8 justify-center">
            {[
              { title: "Web Development Projects", link: "/webdevelopmentprojects" },
              { title: "Data Analytics Projects", link: "/dataanalyticsprojects" },
            ].map((project, index) => (
              <div
                key={index}
                className="lg:w-1/3 md:w-1/2 w-full p-2 transform transition duration-500 rounded-xl hover:scale-105 text-center bg-gradient-to-r from-blue-500 via-blue-400 to-black animate-fadeIn cursor-pointer"
                onClick={() => navigate(project.link)}
              >
                <div className="p-4 h-full flex items-center bg-neutral-900 rounded-xl">
                  <h2 className="text-white title-font text-[2.4rem] font-medium">
                    {project.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;