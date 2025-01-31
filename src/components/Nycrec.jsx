const Nycrec = ({ nycrec }) => {
  return (
    <li className="Nycrec" id={nycrec.name}>
      <div className="Nycrec-info">
        <h3>{nycrec.name}</h3>
        <img src={nycrec.image.exterior} />
        <h5>Borough: {nycrec.location.borough}</h5>
        <h5>Neighborhood: {nycrec.location.neighborhood}</h5>
        <h5>Description: {nycrec.description}</h5>
      </div>
    </li>
  )
}

export default Nycrec
