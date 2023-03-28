import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg  bg-dark bg-gradient">
  <div className="container">
    <a className="navbar-brand text-white" to="/">Paint MagoXJocker <span className='display-5'> 🖌️</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link text-white" aria-current="/" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/contact">Contacto</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar