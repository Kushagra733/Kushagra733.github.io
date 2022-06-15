import React from 'react'
import './Resume.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
export default function Resume() {
  return (
    <div>
      <a href='/Resume.pdf' className='resume' target='blank'>Resume<OpenInNewIcon/></a>
    </div>
  )
}
