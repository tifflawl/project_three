const Nycrec = ({ nycrec }) => {
  return (
    <li className="nycrec" id={nycrec.name}>
      <div className="nycrec-info">
        <h2>
          <a href={nycrec.website}>{nycrec.name}</a>
        </h2>
        <a href={nycrec.website}>
          <img src={nycrec.image.exterior} />
        </a>

        <h5>
          {nycrec.type} | {nycrec.price} | {nycrec.location.borough},{' '}
          {nycrec.location.neighborhood}
        </h5>
        <h5>Address: {nycrec.address}</h5>
        <p>{nycrec.description}</p>
      </div>
    </li>
  )
}

export default Nycrec
