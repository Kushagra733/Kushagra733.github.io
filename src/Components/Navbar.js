import React from 'react'
import './Navbar.css'
export default function Navbar() {

  const project = ()=>{
    window.scroll({
      top:2000, 
      left: 0, 
      behavior: 'smooth' 
     });
  }
  const skills = ()=>{
    window.scroll({
      top:540, 
      left: 0, 
      behavior: 'smooth' 
     });
     
  }
  const education = ()=>{
    window.scroll({
      top:1050, 
      left: 0, 
      behavior: 'smooth' 
     });
    }
  return (
    <div className='navbar'>

        <ul>
            <div  className='y' onClick={skills}>SKILLS</div>
            <div className="y" onClick={education}>EDUCATION</div>
            <div className='y' onClick={project}>PROJECTS</div>
        </ul>
      
    </div>
  )
}
