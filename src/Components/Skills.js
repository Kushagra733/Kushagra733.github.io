import React from 'react'
import './Skills.css'
import Ethereum from './ethereum.svg'

export default function Skills() {
  return (
    <div className='icons'>
        
        <div className='skills'>SKILLS</div>

        <div className='heading'>Web Development</div>

        <div className="webd">
            <i class="devicon-nodejs-plain-wordmark icon"></i>
            <i class="devicon-react-original-wordmark icon"></i>
            <i class="devicon-bootstrap-plain-wordmark icon"></i>
            <i class="devicon-jquery-plain-wordmark icon"></i>
            <i class="devicon-html5-plain-wordmark icon"></i>
            <i class="devicon-css3-plain-wordmark icon"></i>
        </div>

        <div className="heading">Database</div>




    <div className="database">
    <i class="devicon-mongodb-plain-wordmark icon"></i>
    <i class="devicon-mysql-plain-wordmark icon"></i>

    </div>

    <div className="heading">Blockchain</div>

    <div className="blockchain">
    <div className="block">
    <i className="devicon-solidity-plain icon"></i>
    <div className="name">Solidity</div>
    </div>
    <img src={Ethereum} style={{height:'80px'}}  className='icon' alt="Ethereum Logo" />
    </div>



      
    </div>
  )
}
