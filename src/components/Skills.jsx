import React from 'react'
import data from "./skills.json"
export const Skills = () => {
  return (
    <div id="skills" className='text-white text-center items-center'>
      <br />
      <br />
      <br />
      <br />
       <h1 className='text-[1.6rem] underline mb-4 font-bold' style={{textShadow:"#00B5E2 0px 5px 15px " }} >Tech<span className='text-[#0ef]'> stacks</span></h1>
      <br />
      <br />
      
       <div id="skillanimationrotate" className='grid grid-cols-3   md:grid-cols-4' >
        {data.map((e)=>{
          return(
            <div className='flex flex-col items-center text-center m-[10px]'>
          <img className='w-[5rem]' src={e.imgsrc}/>
          <h2 >{e.title}</h2>
          </div>
          )
        })}
       </div>
    </div>
  )
}
