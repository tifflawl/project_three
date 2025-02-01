const Nycrec = ({ nycrec }) => {
  return (
    <li className="nycrec" id={nycrec.name}>
      <div className="nycrec-info">
        <h2>{nycrec.name}</h2>
        <img src={nycrec.image.exterior} />
        <h5>Borough: {nycrec.location.borough}</h5>
        <h5>Neighborhood: {nycrec.location.neighborhood}</h5>
        <h5>Address: {nycrec.address}</h5>
        <h5>Open: {nycrec.open.days}</h5>
        <h5>Price: {nycrec.price}</h5>
        <p>{nycrec.description}</p>
      </div>
    </li>
  )
}

export default Nycrec
