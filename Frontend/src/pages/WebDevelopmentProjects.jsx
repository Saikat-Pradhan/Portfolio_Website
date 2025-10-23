import React from 'react'
import { NavLink } from 'react-router-dom'

const WebDevelopmentProjects = () => {

  return (
    <div className='h-screen bg-neutral-800 overflow-scroll'>
      <section className="text-gray-300 body-font">
        <div className="container px-7 py-14 md:py-19 lg:py-24 mx-auto">
          <div className="flex flex-wrap gap-[1cm] items-center justify-center -m-4">
            {[
              { title: "Spotify Clone", img: "https://img.freepik.com/premium-photo/cartoon-lofi-young-manga-style-girl-studying-while-listening-music_908344-1536.jpg", link: "https://spotify-mp3-saikat-pradhan-xfac.onrender.com/" },
              { title: "HobbyHub", img: "https://cdn.openart.ai/uploads/image_nhWjXBp1_1728552718272_raw.jpg", link: "https://hobby-hub-saikat-pradhan-t21r.onrender.com" },
              { title: "Blogify", img: "https://pixelweavers.in/wp-content/uploads/2018/07/blog.jpg", link: "https://blogify-saikat-pradhan-d21y.onrender.com"}
            ].map((project, index) => (
              <NavLink
                to={project.link}
                key={index}
                aria-label={`View details for ${project.title}`}
                className="cursor-pointer bg-gradient-to-r from-blue-500 via-blue-400 to-black rounded-xl lg:w-1/3 md:w-1/2 w-full p-[6px] transform transition duration-500 lg:hover:scale-105 animate-fadeIn"
              >
                <div className="bg-neutral-900 rounded-xl p-4">
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
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebDevelopmentProjects
