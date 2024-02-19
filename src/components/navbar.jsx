import React, { useState } from 'react'
import { HiBars3 ,HiMiniXMark} from "react-icons/hi2";
import { Toggledown } from './toggledown';
import Hitesh_sharma from "../assets/Hitesh_Sharma.pdf"
export const Navbar = () => {
    const[toggle,settoggle]=useState(false);
    const openResume = () => {
      window.open(
        "https://drive.google.com/file/d/1xyLe5bOAxU46hP2UGabu0Ekfle2_stHs/view?usp=sharing", //resume link
        "_blank"
      );
    };
  return (
    <div className='flex items-center  justify-between' id='home' >
    <div className='fromR' > <h2 className='text-[24px] font-bold text-[white] '>My<span className='text-orange-600'> P</span><span className='text-orange-500'>ortfolio</span></h2></div>
   <div id='fromT' className='hidden sm:flex gap-2 text-white ml-[200px] md:flex gap-1 ml=[400px] lg:ml=[400px]'>

   <h2 style={{textShadow:"#00B5E2 0px 5px 15px " }}
    className='hover:border-[1px] border-yellow-500 rounded-full text-[15px] px-3 py-1 '
   ><a href="#home">HOME</a>
    </h2>
   <h2 style={{textShadow:"#00B5E2 0px 5px 15px " }}
    className='hover:border-[1px] border-yellow-500 rounded-full text-[15px] px-3 py-1'>
    <a href="#about">ABOUT</a>
    </h2>
   <h2 style={{textShadow:"#00B5E2 0px 5px 15px " }}
    className='hover:border-[1px] border-yellow-500 rounded-full text-[15px] px-3 py-1'
   ><a href="#skills">SKILLS</a></h2>
   <h2 style={{textShadow:"#00B5E2 0px 5px 15px " }}
    className='hover:border-[1px] border-yellow-500 rounded-full text-[15px] px-3 py-1'
   ><a href="#project">PROJECT</a></h2>
    <h2 style={{textShadow:"#00B5E2 0px 5px 15px " }}
    className='hover:border-[1px] border-yellow-500 rounded-full text-[15px] px-3 py-1'
   ><a href="#cont">CONTACT</a></h2>
   <a  href={Hitesh_sharma} download="Hitesh-Sharma-Resume">
   <button onClick={openResume} style={{borderRadius:"7px", boxShadow:"#00B5E2 0px 3px 10px",padding:"5px", paddingLeft:"10px", paddingRight:"10px" }}> RESUME</button></a>
   
    </div> 
    <div>
    <div  className='sm:hidden'>
       {!toggle ? <HiBars3 onClick={()=>{settoggle(true)}} 
       className='text-white text-[24px]'/>: <HiMiniXMark onClick={()=>{settoggle(false)}}
        className='text-white text-[24px]'/> } 
    <div>  {toggle && <Toggledown settoggle={settoggle}/>}</div>
      
    </div></div>
    
      </div >
 )
}
