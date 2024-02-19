
import React from "react";
import GitHubCalendar from "react-github-calendar"

export default function GithubCalenderdata() {
  return (
    <div className='flex flex-col items-center text-white mt-[22rem] md:mt-[15rem] lg:mt-[15rem]'>
      <h1 className='text-[24px] underline mb-4 font-bold' style={{textShadow:"#00B5E2 0px 5px 15px " }} >Git<span className='text-[#0ef]'>stats</span></h1>
      <br/>
      <br/>
      <GitHubCalendar
        className="react-activity-calendar"
        style={{color:"white"}}
        color="skyblue"
        username="hiteshsharma2000"
      />

      <div className="w-[100%] flex flex-col items-center">
        <img
          id="github-top-langs"
          width="50%"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=hiteshsharma2000&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=white"
        />
      </div>
      <div className="w-[100%] flex justify-around ">
        <img
        style={{borderRadius:"5px"}}
          id="github-stats-card"
          width="40%"
          src="https://github-readme-stats.vercel.app/api?username=hiteshsharma2000&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=white"
        />
     
        <img
          id="github-streak-stats"
          width="41%"
          // src="https://github-readme-streak-stats.herokuapp.com/?user=hiteshsharma2000&theme=react&hide_border=false"
          src="https://github-readme-streak-stats.herokuapp.com/?user=hiteshsharma2000&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
          alt=""
        />
      </div>
    </div>
  );
}
