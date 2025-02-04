import React from 'react'

import DateTime from './DateTime'
import Weather from './Weather'

const SideBar = ({ data }) => {
  return (
    <div className="side-bar">
      <div className="side-info">
        <Weather></Weather>
        <DateTime></DateTime>
        <div>
          🏡 <a href="index.html">home</a>
        </div>
        <div>
          📖 <a href="about.html">about</a>
        </div>
      </div>
    </div>
  )
}

export default SideBar
