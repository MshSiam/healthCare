import React from "react"
import css from "./service.css"

const Service = (props) => {
  const { name, image, id, details } = props.service
  return (
    <div className="service col-lg-4 col-md-6 col-12">
      <div className="bgcolor">
        <img className="service-img" src={image} alt="" />
        <h3 className="text-info">{name}</h3>
        <p>{details.slice(0, 80)}</p>
        <button className="btn-danger rounded-3">Learn More</button>
      </div>
    </div>
  )
}

export default Service
