import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
    <div id='header'>
        <nav className="nav">
    <div className="container">
    <a className="navbar-brand" href="#">
        <img id='img' src="/assete/logoBG.png" alt="" width="30%" height="54%"  />
      </a>
      {/* <button type="button" className="btn btn-outline-secondary mt-2" style={{float: "right"
}}>
      <i className="fa-solid fa-language m-2"></i>
        العربية</button>   */}
          </div>
  </nav>
  </div>
  </>
  ) 
}

export default Header