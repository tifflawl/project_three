import Nycrec from './Nycrec'

const MainContent = ({ data }) => {
  return (
    <div className="main">
      <div className="main-info">
        <h1>New York City</h1>
        <h4>an a-z guide to some of my favorite spots in the city :-)</h4>
      </div>
      <ul>
        {data.nycrec.map((nycrec) => (
          <Nycrec nycrec={nycrec} />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
