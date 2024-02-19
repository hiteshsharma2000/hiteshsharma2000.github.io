import React ,{useRef} from 'react'
import pic from "../assets/profilepic.png"
import Hitesh_Sharma from "../assets/Hitesh_Sharma.pdf"
import {Typewriter} from 'react-simple-typewriter'


export const Body = () => {



  const form = useRef();



  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1xyLe5bOAxU46hP2UGabu0Ekfle2_stHs/view?usp=sharing", //resume link
      "_blank"
    );
  };
  return (
    <div className='grid grid-cols-1   md:grid-cols-2 pt-10 md:gap-70  items-centre   '  >
         <div className='md: p-14 ' id='intro'>
            <p className='text-white text-[16px]'>Hello 👋  Welcome To My Portfolio</p>
            <p  className='text-white text-[50px] font-bold' style={{textShadow:"#00B5E2 0px 5px 15px " }}>Hitesh Sharma</p>
            <p id='bounce' style={{textShadow:"#00B5E2 0px 5px 15px " }}
             className='text-white text-[40px] font-bold '>I'm &nbsp;
           <span  style={{textShadow:"none" }}
            className='text-orange-500'> 
            <br/>
              <Typewriter 
            words={[ 'Footballer','Mern stack developer']}
            loop={100}
            cursor
           
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={400}
            
          /></span>
          </p>
            <div  className='mt-4 flex gap-4 items-center' onClick={openResume}>
            <a href={Hitesh_Sharma} download="Hitesh-Sharma-Resume">
                <button id='shake' className='text-white text-[12px] px-3 pb-2 py-2 bg-orange-500 rounded-full font-bold hover:border-[2px] hover:border-white '
                 >SEE RESUME</button></a>
               <br/>
              
            </div>
            <br/>
            <div className='logo'>
                <a  href='https://www.facebook.com/profile.php?id=100012504098381' ><i class='bx bxl-facebook' ></i></a>
                <a href='https://www.linkedin.com/in/hitesh-sharma-5b9870229'><i class='bx bxl-linkedin-square' ></i></a>
                <a href='https://github.com/hiteshsharma2000'><i class='bx bxl-github' ></i></a>
                <a href='#cont'><i class='bx bxs-contact' ></i></a>
            </div>
         </div>

         <div id='profilepic' className='ml-[30%]  mt-6 items-center h-[350px] w-[70%] md:ml-20 rounded-[20px] p-2  rounded-[7px] ' 
          >
            <img 
            className='h-full w-full object-cover rounded-[7px]'
            src="https://process.filestackapi.com/cache=expiry:max/resize=width:1050/efbSR18hT5uRKuo0zoMA" />
         </div>

    </div>
  )
}
