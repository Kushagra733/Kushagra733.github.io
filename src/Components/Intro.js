import React from 'react'
import './Intro.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Intro() {
  return (
    <div className='into'>
      <div className="bold">
        Hi, I'm Kushagra Mishra
      </div>
      <div className="medium">
      I am a Fullstack Developer and a competitive programmer. With knack of efficiency and scalability , I want to utilize my skills to transform ideas into reality using code. I'm currently in my second year, pursuing B.Tech in Electrical Engineering at IIT(ISM) Dhanbad.

     I am also interested in Blockchain Technology and love it's concept as a whole. I am skilled in writing smart contracts, building Decentralized Applications (Dapps), and Solidity.
      </div>
      <div className="handles">
            <ul>
                <li><a href ='https://github.com/Kushagra733' className='handle' target='blank'><GitHubIcon className='x'/></a></li>
                <li><a href='https://www.linkedin.com/in/kushagra-mishra-241aa1218/' className='handle' target='blank'><LinkedInIcon className='x'/></a></li>
            </ul>
      </div>
    </div>
  )
}
