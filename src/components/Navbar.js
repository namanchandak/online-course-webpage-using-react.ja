import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='#'>Lingua</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"  >
          <a className="nav-link active" aria-current="page" href='#'>Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>About us</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href='#'>Teachers</a>
        </li>


        <li className="nav-item">
          <a className="nav-link" href='#'>Pricing</a>
        </li>


        <li className="nav-item">
          <a className="nav-link" href='#'>Career</a>
        </li>


        <li className="nav-item ">
          <a className="nav-link" href='#'>Blog</a>
        </li>

        


        
        
      </ul>

      
      
    </div>

    <button type="button"  className="btn btn-outline" style={{color:"#524FD5"}}>Get Started</button>
  </div>
</nav>




    </div>
  )
}

Navbar.protoType={title :PropTypes.string.isRequired,
                    abouttext: PropTypes.string}

Navbar.defaultProps={
    title: 'Set title here ',
    abouttext: 'about text here'
}
