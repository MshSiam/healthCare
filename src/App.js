import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Aboutus from "./components/pages/About Us/Aboutus"
import Notfound from "./components/pages/notfound/Notfound"
import Services from "./components/pages/services/Services"
import Contact from "./components/pages/contact us/Contact"
import Login from "./components/pages/Login&signup/Login"
import Header from "./components/pages/header/Header"
import ServicesPage from "./components/pages/services/ServicesPage"
import Footer from "./components/pages/footer/Footer"
import Singup from "./components/pages/Login&signup/Singup"
import AuthProvider from "./context/AuthProvider"

function App() {
  return (
    <div class="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <Aboutus></Aboutus>
            </Route>
            <Route path="/services">
              <ServicesPage></ServicesPage>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Singup></Singup>
            </Route>
            <Route path="/*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
