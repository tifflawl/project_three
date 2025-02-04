import DateTime from './DateTime'

const SideBar = ({ data }) => {
  return (
    <div className="side-bar">
      <div className="side-info">
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
