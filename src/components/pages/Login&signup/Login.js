import React from "react"
import css from "./login.css"
import login from "../../../images/2007.i039.019_cyber_security_spyware_data_protection_isometric_set-06.jpg"
import useAuth from "../../../hooks/useAuth"

const Login = () => {
  const { singInUsingGoogle } = useAuth()
  return (
    <div>
      <h2 className="text-center">Please Login</h2>
      <div className="login-container">
        <div className="login-img  ">
          <img className="img-fluid" src={login} alt="" />
        </div>
        <div className="login-form mt-4 pt-4">
          <h4 className="mb-3">Fillup the Form</h4>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" />
            <br />
            <br />
            <label htmlFor="password">Pass:</label>
            <input type="password" name="password" />
            <br />
            <br />
            <button type="login" className="btn btn-primary">
              Login
            </button>
            <br />
          </form>
          <button onClick={singInUsingGoogle} className="btn-danger">
            Google SignIn
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
