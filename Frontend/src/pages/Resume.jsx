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
    <div className='h-screen bg-neutral-900 pt-[2cm]'>
      <div>
        <div className='p-3'>
          <img src="/ResumePic.png" alt="Resume" />
        </div>
        <BiSolidDownload
          className="absolute top-[17cm] right-7 size-[2rem] p-[1px] rounded-full text-black bg-white border-[2px] border-black cursor-pointer animate-bounce"
          onClick={ResumeDownload}
        />
      </div>
    </div>
  )
}

export default Resume
