import React from "react"
import css from "./herocaed.css"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faUserMd,
  faAmbulance
} from "@fortawesome/free-solid-svg-icons"

const element1 = <FontAwesomeIcon icon={faClock} />
const element2 = <FontAwesomeIcon icon={faUserMd} />
const element3 = <FontAwesomeIcon icon={faAmbulance} />

const Herocard = () => {
  return (
    <div className="container-fluid card-container mb-4 pb-4">
      <div className="card">
        <img src={element1} alt="" />

        <div class="card-body">
          <h5 class="card-title">{element1} 24/7 ICU</h5>
          <p class="card-text">
            An intensive care unit (ICU), also known as an intensive therapy
            unit or intensive treatment unit (ITU) or critical care unit (CCU),
            is a special department of a hospital or health care facility that
            provides intensive care medicine.
          </p>
        </div>
      </div>

      <div className="card ">
        <div class="card-body">
          <h5 class="card-title">{element2} Best Doctors</h5>
          <p class="card-text">
            Trusted results for Doctor Jobs In Usa. Check Visymo Search for the
            best results! Unlimited Access. 100% Secure. Always Facts. Privacy
            Friendly. The Best Resources. Results & Answers. Types: Best
            Results, Explore Now, New Sources, Best in Search.
          </p>
        </div>
      </div>

      <div className="card ">
        <div class="card-body">
          <h5 class="card-title">{element3} Air Ambulance</h5>
          <p class="card-text">
            Get a free quote in 5 min. We will get you back safely, wherever you
            are. Contact us now. Our Air Ambulance experts will bring you back
            home safe and fast | 24/7. Bed to Bed. Experienced Experts.
            Available 24/7. Services: 24h Service, Bed to Bed-Service.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Herocard
