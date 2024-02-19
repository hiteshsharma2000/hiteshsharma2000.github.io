import React from 'react'
import pic from "../assets/profilepic.png"

export const About = () => {
  return (
    <div className='md:flex lg:flex'>
    <div id="about" className='text-start grid gap-[2px] text-white ml-8 mr-8 mt-10 text-[18px]'>
      <h1 className='text-center text-[24px] underline mb-4 font-bold' style={{textShadow:"#00B5E2 0px 5px 15px " }} >About <span className='text-[#0ef]'>Me</span> </h1>
      Hi there, I'm Hitesh Sharma! My background is in civil engineering, but I've discovered a passion for web development and am currently honing my skills as a full stack developer at Masai School. After completing my engineering degree, I decided to explore my interest in coding. I find it fascinating to turn blueprints into digital experiences, and my journey into the world of web development has been nothing short of exciting. As part of my learning experience, I successfully developed a project - a clone of Nordstrom.com - that not only showcased my technical abilities but also ignited my enthusiasm for creating seamless and visually appealing web applications.              
    </div>
     <div id='profilepic2' className='ml-[10%] w-[70%] mt-6 items-center h-[350px] md:w-[100%] lg:w-[100%] sm:w-[100%] md:ml-10 rounded-[20px] p-2  ' 
     >
      <br />
      <br />
       <img 
       className='h-full w-full object-cover mt-6 border-[5px]  border-[orange] bg-[#f8f8ff] rounded-[7px]'
       src={pic} />
    </div>
    </div>
  )
}
