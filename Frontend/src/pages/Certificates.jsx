import React from 'react'
import { BiSolidDownload } from "react-icons/bi"

const Certificates = () => {

  const CertificateDownload = (fileLink, fileName) => {
    const link = document.createElement("a");
    link.href = fileLink;
    link.download = `Saikat Pradhan Certificate - ${fileName}`;
    link.click();
  };  

  return (
    <div className='h-screen bg-neutral-800 overflow-scroll'>
      <section className="text-gray-300 body-font">
        <div className="container px-7 py-14 md:py-19 lg:py-24 mx-auto">
          <div className="flex flex-wrap gap-[1cm] items-center justify-center -m-4">
            {[
              { title: "Foundations of Data Structures and Algorithms", img: "DSA.png", link: "Foundations of Data Structures and Algorithms.pdf" },
              { title: "Google Data Analytics", img: "GoogleDataAnalytics.png", link: "Google Data Analytics.pdf" },
            ].map((project, index) => (
              <div
                key={index}
                aria-label={`View details for ${project.title}`}
                className="cursor-pointer bg-gradient-to-r from-blue-500 via-blue-400 to-black rounded-xl lg:w-1/3 md:w-1/2 w-full p-[6px] transform transition duration-500 hover:scale-105 animate-fadeIn"
              >
                <div className="bg-neutral-900 rounded-xl p-4 lg:h-[8.4cm]">
                  <div className="relative h-48 rounded overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="object-cover object-center w-full h-full rounded-xl block"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-white text-lg font-medium title-font">
                      {project.title}
                    </h2>
                    <BiSolidDownload onClick={() => CertificateDownload(project.link, project.title)} className='size-[0.6cm] text-white border border-white rounded-[50%] p-[2px]'/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certificates
