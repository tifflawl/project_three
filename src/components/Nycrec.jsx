const Nycrec = ({ nycrec }) => {
  return (
    <li className="nycrec" id={nycrec.name}>
      <div className="nycrec-info">
        <h2>
          <a href={nycrec.website} target="_blank">
            ☆ {nycrec.name} ☆
          </a>
        </h2>
        <div className="imgcontainer">
          <a href={nycrec.website} target="_blank">
            <img src={nycrec.image.exterior} class="image" />
          </a>
        </div>

        <h5>
          {nycrec.type} | {nycrec.price} | {nycrec.location.neighborhood}, {}
          {nycrec.location.borough}
        </h5>
        <h5>
          {nycrec.location.address} {nycrec.location.city} {nycrec.location.zip}
        </h5>
        <p>{nycrec.description}</p>
      </div>
    </li>
  )
}

export default Nycrec
