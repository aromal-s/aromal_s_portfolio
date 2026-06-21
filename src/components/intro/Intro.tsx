import React from 'react'
import bg from '../assets/bgimage.jpeg'
import hire from '../assets/hireme.png'
import './Intro.css'
import {Link} from 'react-scroll'
function Intro() {
  return (
    <section id="intro">
        <div className="introcontent">
           <span className='hello'>Hello,</span>
           <span className='introtext'>I am <span className='introname'>Aromal</span><br />Software Developer</span>
            <span className="intropara">I am a skilled web developer with experience in creating <br />visually appealing and user friendly websites.</span>
            <Link><button className="btn"><img src={hire} alt="hire" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro