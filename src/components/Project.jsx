import React from 'react'
import ss from '../assets/travelocity.png'
import ss2 from "../assets/superhero.png"
import ss3 from "../assets/movies.png"
import Nordstrompic from "../assets/Nordstrom.png"
export const Project = () => {

  
  return (
    <div id='project' ><h2 className="text-white underline text-center  text-[1rem] font-bold" style={{textShadow: "rgb(0, 181, 226) 0px 5px 15px",fontSize:"1.7rem"}}> Projects</h2>
 <br/>
 <br/>
 
 <div id="hoverprodiv" className=' grid md:grid-cols-2 gap-[5%] md:gap-[15%] lg:gap-[15%] text-center sm:grid-cols-1 pl-4 pr-4 text-white ' style={{textShadow: "rgb(0, 181, 226) 0px 5px 15px"}}> 
    <div classname=" pb-[7px] rounded-[10px] px-[10%] " style={{boxShadow:"rgb(0, 181, 226) 0px 5px 15px",borderRadius:"7px",backgroundColor:"#100c0"}} >
      <img  src={Nordstrompic} alt="" className='rounded-[7px]'style={{objectFit:"cover"}} />
      <br/>
      <div  className='flex justify-around ml-[35px]'>
        <h2  className='text-[1.5rem] underline'>Nordstrom <br/>clone</h2>
        <div  className='logo' >
               
                
                <a href='https://github.com/hiteshsharma2000/module2-project-backend-'><i class='bx bxl-github' ></i></a>
                <a href='https://fluffy-haupia-7095af.netlify.app/'><i class='bx bxl-netlify' ></i></a>
            </div>
        <br/>
        <br/>
      </div>

      <p className='p-[10px] text-[1rem] text-start'>
        
Our Nordstrom clone is a cutting-edge MERN project, leveraging the power of MongoDB, Express.js, React, and Tailwind CSS. 
With a robust backend built on Node.js and Express.js, combined with a sleek and responsive frontend developed using React and Tailwind CSS.
          </p>
          <br/>
          
          
<div className='flex justify-around '>
  <img className='h-[2.8rem]' src="https://img.icons8.com/color/512/html-5--v1.png" alt="" />
  <img className='h-[2.8rem]' src="https://img.icons8.com/fluency/512/css3.png" alt="" />
  <img className='h-[2.8rem]' src="https://img.icons8.com/office/512/react.png" alt="" />
  <img className='h-[2.8rem]' src="https://img.icons8.com/color/512/javascript.png" alt="" />
  
</div>
<br/>
    </div>
    <div classname=" pb-[7px] rounded-[10px] " style={{boxShadow:"rgb(0, 181, 226) 0px 5px 15px",borderRadius:"7px"}} >
      <img  src={ss} alt=""  className='rounded-[7px]'style={{objectFit:"cover"}} />
      <br/>
      <div  className='flex justify-around ml-[35px]'>
        <h2  className='text-[1.5rem] underline'>Travelocity <br/>clone</h2>
        <div  className='logo' >
               
                
                <a href='https://github.com/masai-course/hitesh_sharma_cap05_149/tree/master/unit-1/project/travel%20city%20project/my-travel-app'><i class='bx bxl-github' ></i></a>
                <a href='https://bespoke-beijinho-8476f0.netlify.app/'><i class='bx bxl-netlify' ></i></a>
            </div>
        <br/>
        <br/>
      </div>

      <p className='p-[10px] text-[1rem] text-start'>
        An online travel agency website which has been cloned with the help of React,html, Javascript.
         Built the authentication part with React and context API, created search functionality for the
          hotels page, designed favorite and Download page for booking hotels.
          </p>
          <br/>
          
          
<div className='flex justify-around '>
  <img className='h-[2.8rem]' src="https://img.icons8.com/color/512/html-5--v1.png" alt="" />
  <img className='h-[2.8rem]' src="https://img.icons8.com/fluency/512/css3.png" alt="" />
  <img className='h-[2.8rem]' src="https://img.icons8.com/office/512/react.png" alt="" />
  <img className='h-[2.8rem]' src="https://img.icons8.com/color/512/javascript.png" alt="" />
  
</div>
<br/>
    </div>
    
    <div classname=" pb-[7px] rounded-[10px] " style={{boxShadow:"rgb(0, 181, 226) 0px 5px 15px",borderRadius:"5px",backgroundColor:"black"}} >
      <img  src={ss2} alt=""  className='rounded-[7px]'style={{objectFit:"cover"}}/>
      <br/>
      <div className='flex justify-around ml-[35px]'>
        <h2 className='text-[24px] underline '>Superhero <br /> Resume</h2>
        <div  className='logo'>
               
                
                <a href='https://github.com/hiteshsharma2000'><i class='bx bxl-github' ></i></a>
                <a href='https://endearing-kringle-da125d.netlify.app/'><i class='bx bxl-netlify' ></i></a>
            </div>
        <br/>
        <br/>
      </div>

      <p className='p-[10px] text-start'>
      Iron Man, also known as Tony Stark, is a brilliant inventor.he battles villains and global threats, showcasing his ingenuity and charisma. Stark's resume boasts achievements in engineering, artificial intelligence, and philanthropy, making him a standout figure in both business and superhero realms
          </p>
          <br/>
<div className='flex justify-around'>
  <img className='h-[2.8rem]' src="https://img.icons8.com/color/512/html-5--v1.png" alt="" />
  <img className='h-[2.8rem]' src="https://img.icons8.com/fluency/512/css3.png" alt="" />
  <img className='h-[2.8rem]' src="https://img.icons8.com/color/512/javascript.png" alt="" />
</div>
<br/>
    </div>
    
    <div classname=" pb-[7px] rounded-[10px] " style={{boxShadow:"rgb(0, 181, 226) 0px 5px 15px",borderRadius:"7px"}} >
      <img  src={ss3} alt=""  className='rounded-[7px]'style={{objectFit:"cover"}}/>
      <br/>
      <div className='flex justify-around ml-[35px]'>
        <h2 className='text-[1.5rem] underline '>Movie App</h2>
        <div  className='logo'>
               
                
                <a href='https://github.com/hiteshsharma2000/JS-101_Learning_Javascript/tree/main/omdb'><i class='bx bxl-github' ></i></a>
                <a href='https://cheerful-seahorse-e01a0b.netlify.app/user.html'><i class='bx bxl-netlify' ></i></a>
            </div>
        <br/>
        <br/>
      </div>

      <p className='p-[10px] text-[1rem] text-start'>
      Dynamic movie site crafted with HTML, CSS, and JavaScript,
       offering an immersive user experience. Seamlessly blending responsive design with interactive features,
        this project showcases a passion for both film and web development
          </p>
          <br/>
<div className='flex justify-around'>
<img className='h-[2.85rem]' src="https://img.icons8.com/color/512/html-5--v1.png" alt="" />
  <img className='h-[2.8rem]' src="https://img.icons8.com/fluency/512/css3.png" alt="" />
  <img className='h-[2.8rem]' src="https://img.icons8.com/color/512/javascript.png" alt="" />
</div>
<br/>

    </div>
    
   
    </div>
    </div>
  )
}
