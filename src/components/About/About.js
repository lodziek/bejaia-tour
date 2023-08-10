import React from 'react';
import './About.css';
import kaya from '../../res/images/kaya.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ filter: 'blur(8px)' }}
      animate={{ filter: 'blur(0)' }}
      exit={{ filter: 'blur(8px)' }}
      transition={{ ease: "linear", duration: .5 }}
    >
      <div className="about-text">
        <h3 className="fade-in-2">The Best Trip Organiser</h3>
        <p className="fade-in-3">Make your journey <br />as the unique and unforgettable ever</p>
        <Link to="/contact" className="btn neon fade-in-4">Learn More</Link>
      </div>
      <div className="about-image">
        <img src={kaya} alt="Sea" />
      </div>
    </motion.section>
  )
}

export default About