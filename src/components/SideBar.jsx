import React from 'react'

import DateTime from './DateTime'
import Weather from './Weather'

const SideBar = ({ data }) => {
  return (
    <div className="side-bar">
      <div className="side-info">
        ⋆｡°•☁︎°•｡⋆<br></br>In New York...
        <Weather></Weather>
        <DateTime></DateTime>
        <br></br>
        <br></br>
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
