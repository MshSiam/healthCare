import React from "react"
import css from "./hero.css"
import Herocard from "./Herocard"

const Hero = () => {
  return (
    <div>
      <section className="showcase px-4">
        <div className="overlay">
          <h1 className="text-light">
            We are Always here to{" "}
            <span className="fw-bold text-warning">Serve You.</span>
          </h1>
          <div className="search">
            <button className="btn-danger rounded-3">
              Make an Appointment
            </button>
          </div>
        </div>
      </section>
      <Herocard></Herocard>
    </div>
  )
}

export default Hero
