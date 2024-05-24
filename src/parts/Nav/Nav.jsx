import { useState } from 'react'
import '../../assets/css/style.css'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { GoX } from "react-icons/go";

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState("")

  const handleClickMenu = () => {
    setMobileMenu("mobile--menu__active")
  }

  return (
    <nav className="nav">
      <h1 className='nav--title'>{"<Pedro Barbosa />"}</h1>
      <IoMenu onClick={handleClickMenu} size={56} className='hamburguer--icon'/>
      {mobileMenu ? (
        <div className={mobileMenu}>
        <GoX />
        <ul className="mobile--menu__items">
        <li className="menu--links"><Link className={location.pathname === "/home" ? "active" : ""} to={"/home"}>Home</Link></li>
        <li className="menu--links"><Link className={location.pathname === "/about" ? "active" : ""} to={"/about"}>About Me</Link></li>
        <li className="menu--links"><Link className={location.pathname === "/projects" ? "active" : ""} to={"/projects"}>Projects</Link></li>
        <li className="menu--links"><Link className={location.pathname === "/contact" ? "active" : ""} to={"/contact"}>Contact Me</Link></li>
        </ul>
        </div>
      
      ) : (null)}
      <ul className="nav--items">
        <li className="nav--link"><Link className={location.pathname === "/home" ? "active" : ""} to={"/home"}>Home</Link></li>
        <li className="nav--link"><Link className={location.pathname === "/about" ? "active" : ""} to={"/about"}>About Me</Link></li>
        <li className="nav--link"><Link className={location.pathname === "/projects" ? "active" : ""} to={"/projects"}>Projects</Link></li>
        <li className="nav--link"><Link className={location.pathname === "/contact" ? "active" : ""} to={"/contact"}>Contact Me</Link></li>
      </ul>
    </nav>
  )
}
