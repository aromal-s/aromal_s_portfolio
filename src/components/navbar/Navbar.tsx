
import './Navbar.css'
import contact from '../assets/contact.png'
import logo from '../assets/aromal_logo.svg'

import {Link} from 'react-scroll'
function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo"  className='logo' />
        <div className="desktop-menu">
            <Link
          className="desktopmenulist"
          to="intro"
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link className='desktopmenulist' to='skills'smooth={true}
          duration={500} >About</Link>
        <Link className='desktopmenulist'>Portfolio</Link>

        </div>
       <button className='desktop-menu-btn'>
        <img src={contact} alt="contact" className='contact' />Contact me</button>
    </nav>
  )
}

export default Navbar