import { useState } from 'react'

import { Navbar } from './components/navbar'
import { Body } from './components/body'
import { About } from './components/About'
import { Project } from './components/Project'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import GithubCalenderdata from './components/githubstats'
import Tools from './components/Tools'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{width:"100%"}} className='md:w-full min-h-screen bg-[black] px-8 md:px-10 lg:px-36 pb-10 pt-7 items-center'>
    <Navbar/>
    <Body/>
    <About/>
    <br/>
    <br/>
    <br/>
   <Skills/>
   <br />
   <br />
   <Tools/>
   <br />
   <br />
   <br />
    <Project/>
   <br/>
   <br/>
  
  
   <br/>
    <GithubCalenderdata/>
    <br/>
    <Contact/>
    
       </div>
       
       
       
    </>
  )
}

export default App
