import Nycrec from './Nycrec'

const MainContent = ({ data }) => {
  return (
    <div className="main">
      <h1>New York City 🍎</h1>
      <h2>tiff's faves in nyc!</h2>
      <ul>
        {data.nycrec.map((nycrec) => (
          <Nycrec nycrec={nycrec} />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
