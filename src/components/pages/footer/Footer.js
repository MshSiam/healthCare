import React from "react"
import logo from "../../../images/—Pngtree—heart care icon with a_3670173.png"
import css from "./foooter.css"

const Footer = () => {
  return (
    <>
      <div className="main-footer bg-dark mt-5 py-5">
        <div className="container   ">
          <div className="row">
            <div className="col ">
              <img className="nav-img" src={logo} alt="" />
              <hr className="text-danger" />
              <ul className="text-light">
                <li>01765871554</li>
                <li>Brahmanbaria, Bangladesh</li>
                <li>123 street, South North</li>
              </ul>
            </div>
            <div className="col text-light">
              <h4>Stuff</h4>
              <hr className="text-danger" />

              <ul className="text-light">
                <li>Muhammad Siam</li>
                <li>Other Stuff</li>
                <li>Cheifs</li>
              </ul>
            </div>
            <div className="col text-light">
              <h4>Stuff</h4>
              <hr className="text-danger" />

              <ul className="text-light">
                <li>Muhammad Siam</li>
                <li>Other Stuff</li>
                <li>Cheifs</li>
              </ul>
            </div>
          </div>
          <hr className="text-danger fw-bold" />
          <div className="row">
            <p className="text-danger">&copy; Reserved by Muhammad Siam</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
