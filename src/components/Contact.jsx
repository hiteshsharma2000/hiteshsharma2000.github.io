import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oddwasb', 'template_ly5ujx2', form.current, '_X_KuQ-ONdFlPYbNv')
      .then((result) => {
          console.log(result.text);
          alert("email send")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="cont"><h2 className="text-white underline text-center  text-[24px] font-bold" style={{textShadow: "rgb(0, 181, 226) 0px 5px 15px"}}> Contact <span className='text-[#0ef]'>Me</span></h2>
    <br/>
     
<div className='grid -grid-cols-1 md:grid-cols-2 gap-4 '>

<div className='flex flex-col gap-4' style={{color:"white",textShadow:"rgb(0, 181, 226) 0px 5px 15px"}}>
<br/>
     <br/>
     <br/>
  <p>Hi there, I'm Hitesh Sharma! My background is in civil engineering, but I've discovered a passion for web development and am
     currently honing my skills as a full stack developer at Masai School. After completing my engineering degree, 
     I decided to explore my interest in coding. I find it fascinating to turn blueprints into digital experiences,
      and my journey into the world of web development has been nothing short of exciting</p>
        <br/>
        <br/>
      <div id="hovtext" className='flex flex-col gap-2'>
      <a href="mailto:sharmahitesh9828@gmail.com"><span className='refer'><i  class='bx bx-envelope'></i></span>&nbsp;sharmahitesh9828@gmail.com</a>
        <a href="#"><span className='refer'><i class='bx bxs-phone-call' ></i></span>&nbsp;8278608230</a>
        <a href="https://www.linkedin.com/in/hitesh-sharma-5b9870229"><span className="refer"><i class='bx bxl-linkedin-square' ></i></span>&nbsp;Hitesh Sharma</a>
     <br/>
      </div>
</div>
<div>
  
<h2 className="text-white underline text-center  text-[24px] font-bold" style={{textShadow: "rgb(0, 181, 226) 0px 5px 15px"}}> Lets <span className='text-[#0ef]'>Connect</span></h2>
<br/>
<br/>
<form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4  md:pl-[20%] pr-[20%] '>
  <input type="text" name="user_name" placeholder='Enter your Name' className='pl-[3%]'/>

  <input type="email" name="user_email" placeholder='Enter your Email' className='pl-[3%]'/>
 
  <textarea name="message" placeholder='Enter your message'  rows="10" cols="40" className='pl-[3%] pt-[3%]'/> 
  <input style={{border:"none",borderRadius:"7px"}} className="bg-[#555557] p-[3.2%]  text-white  hover:text-black border-2 
  hover:bg-[#0ef] br-[10px] font-bold hover:shadow-[0_0px_30px_#0ef]" type="submit" value="Send" />
</form>

</div>

</div>
<br/>
<br/>

<div className='logo'>
                <a  href='https://www.facebook.com/profile.php?id=100012504098381' ><i class='bx bxl-facebook' ></i></a>
                <a href='https://www.linkedin.com/in/hitesh-sharma-5b9870229'><i class='bx bxl-linkedin-square' ></i></a>
                <a href='https://github.com/hiteshsharma2000'><i class='bx bxl-github' ></i></a>
                <a href='#cont'><i class='bx bxs-contact' ></i></a>
            </div>
    </div>
  )
}
