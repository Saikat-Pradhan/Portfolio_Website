import React from 'react'
import { BiSolidDownload } from "react-icons/bi";

const Resume = () => {

  const ResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Saikat Pradhan Resume.pdf";
    link.click();
  };

  return (
    <div className='h-screen lg:h-fit  bg-neutral-900 pt-[2cm] lg:py-5'>
      <div>
        <div className='flex justify-center items-center p-3 overflow-scroll'>
          <img src="/ResumePic.png" alt="Resume" />
        </div>
        <BiSolidDownload
          className="absolute top-[15.5cm] lg:top-[16cm] right-7 size-[2rem] p-[1px] rounded-full text-black bg-white border-[2px] border-black cursor-pointer animate-bounce"
          onClick={ResumeDownload}
        />
      </div>
    </div>
  )
}

export default Resume
