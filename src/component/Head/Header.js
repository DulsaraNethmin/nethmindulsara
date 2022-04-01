import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo101.png"
import {FaTimes,FaBars}from "react-icons/fa";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}> 



            
              {/*<ul className='link f_flex uppercase'>*/}
              <li>
                <a href='#home' style={{textDecoration:'none', color:'black'}}>home</a>
              </li>
              <li>
                <a href='#features'  style={{textDecoration:'none', color:'black'}}>features</a>
              </li>
              <li>
                <a href='#portfolio'  style={{textDecoration:'none', color:'black'}}>works</a>
              </li>
              <li>
                <a href='#blog'  style={{textDecoration:'none', color:'black'}}>blog</a>
              </li>
              <li>
                <a href='#contact'  style={{textDecoration:'none', color:'black'}}>contact</a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <FaTimes className="close home-btn"/> : <FaBars className="open"/>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
