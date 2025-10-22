import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='flex pt-[2cm] lg:pt-0 md:items-center lg:items-center justify-center h-screen w-screen bg-neutral-900 px-3'>
      <div className='text-center h-[14cm] mt-[6px] p-6 bg-black rounded-[0.5cm] md:w-[15cm] lg:w-[20cm] shadow-2xl shadow-neutral-500'>
        <p className='mt-[2cm] text-[0.7cm] text-white'>Hello, I'm</p>
        <h1 className='text-[1rem] font-serif text-blue-400 mt-[0.5cm]'>Saikat Pradhan</h1>
        <p className='mt-[1cm] text-white'>A 3rd year Computer Science student in Sister Nivedita University.</p>
        <div className='flex justify-center gap-[1cm] mt-[2cm]'>
           <div className='w-[3cm] h-[1cm] bg-blue-500 rounded-[6px] hover:brightness-[70%] cursor-pointer' onClick={() => navigate("/hiring")}>
             <p className='text-white mt-[5px]'>Hire Me</p>
           </div>
           <div className='w-[3cm] h-[1cm] bg-blue-500 rounded-[6px] hover:brightness-[70%] cursor-pointer' onClick={() => navigate("/resume")}>
             <p className='text-white mt-[5px]'>Get Resume</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Home
