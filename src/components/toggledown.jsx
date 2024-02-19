import React from 'react'

export const Toggledown = ({settoggle}) => {
  return (
      <div className='text-white absolute left-0 backdrop-blur-lg  min-h-full  w-full mt-7 text-center'>
   <h2 className='mb-6 justify-center mt-10 text-[24px] hover:scale-110 transition-all ease-in-out duration -300 cursor-pointer' 
   ><a onClick={()=>{settoggle(false)}} href="#home" >HOME</a></h2>
   <h2  className='mb-6 justify-center mt-10 text-[24px] hover:scale-110 transition-all ease-in-out duration -300 cursor-pointer'
   ><a onClick={()=>{settoggle(false)}} href="#about" >ABOUT</a></h2>
   <h2 className='mb-6 justify-center mt-10 text-[24px] hover:scale-110 transition-all ease-in-out duration -300 cursor-pointer'
   ><a onClick={()=>{settoggle(false)}} href="#skills" >SKILLS</a></h2>
   <h2 className='mb-6 justify-center mt-10 text-[24px] hover:scale-110 transition-all ease-in-out duration -300 cursor-pointer'
   ><a onClick={()=>{settoggle(false)}} href="#project" >PROJECT</a></h2>
   <h2 className='mb-6 justify-center mt-10 text-[24px] hover:scale-110 transition-all ease-in-out duration -300 cursor-pointer'
   ><a onClick={()=>{settoggle(false)}} href="#cont" >CONTACT</a></h2>

    </div>
  )
}
