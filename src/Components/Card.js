import React from 'react'
import './Cards.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Card(props) {
  return (
    <div className='box'>
      <div className="title">{props.title}</div>
      <div className="about">{props.about}</div>
      <div className="tech">{props.tech}</div>
      <div className="github"><a href={props.github} target='blank'><OpenInNewIcon/></a></div>

    </div>
  )
}
