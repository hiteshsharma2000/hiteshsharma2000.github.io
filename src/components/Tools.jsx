import React from 'react'

const Tools = () => {
  return (
    <div id="skills" className='text-white text-center items-center'>
      <br />
      <br />
      <br />
      <br />
       <h1 className='text-[1.6rem] underline mb-4 font-bold' style={{textShadow:"#00B5E2 0px 5px 15px " }} >Tools<span className='text-[#0ef]'> Used</span></h1>
      <br />
      <br />
      
       <div id="skillanimationrotate" className='grid grid-cols-3   md:grid-cols-4' >
      
  
            <div className='flex flex-col items-center text-center m-[10px]'>
          <img className='w-[4.2rem]'src='https://seeklogo.com/images/N/netlify-icon-logo-7CF6AA9DC7-seeklogo.com.png'/>
          <h2 >Netlify</h2>
          </div>
            <div className='flex flex-col items-center text-center m-[10px]'>
          <img className='w-[4.2rem]'src='https://static-00.iconduck.com/assets.00/file-type-vscode-icon-512x508-376y62ux.png'/>
          <h2 >Vs Code</h2>
          </div>
            <div className='flex flex-col items-center text-center m-[10px]'>
          <img className='w-[4.2rem]'src='https://th.bing.com/th/id/OIP.UlwueK9OjmNwdjT-ao1FvAHaHa?rs=1&pid=ImgDetMain'/>
          <h2 >Code Sandbox</h2>
          </div>
            <div className='flex flex-col items-center text-center m-[10px]'>
          <img className='w-[4.2rem]'src='https://th.bing.com/th/id/OIP.7aQitMAcWD-jdWta0SjHLgAAAA?rs=1&pid=ImgDetMain'/>
          <h2 >ThunderClient</h2>
          </div>
         
       
       </div>
    </div>
  )
}

export default Tools