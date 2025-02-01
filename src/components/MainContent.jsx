import Nycrec from './Nycrec'

const MainContent = ({ data }) => {
  return (
    <div className="main">
      <ul>
        {data.nycrec.map((nycrec) => (
          <Nycrec nycrec={nycrec} />
        ))}
      </ul>
    </div>
  )
}

export default MainContent
