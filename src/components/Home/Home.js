import { Slide } from 'hero-slider';
import HeroSlider from 'hero-slider/dist/HeroSlider';
import React from 'react';
import image from '../../res/images/home4.jpg';
import image1 from '../../res/images/home1.webp';
import image2 from '../../res/images/home2.jpg';
import '../Home/home.css';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <motion.div
      initial={{ filter: 'blur(8px)' }}
      animate={{ filter: 'blur(0)' }}
      exit={{ filter: 'blur(8px)' }}
      transition={{ ease: "linear", duration: 1 }}
    >
      <HeroSlider
        autoplay
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={nextSlide => console.log("onChange", nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "#000"
        }}
        settings={{
          slidingDuration: 500,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 5000,
          height: "100vh"
        }}
      >
        <Slide
          background={{
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="container">
            <motion.img
              src={image1}
              alt='Bejaia'
              initial={{ filter: 'blur(8px)' }}
              animate={{ filter: 'blur(0)' }}
              exit={{ filter: 'blur(8px)' }}
              transition={{ ease: "linear", duration: 1 }}
            />
          </div>
        </Slide>
        <Slide
          background={{
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="container">
            <motion.img
              src={image}
              alt='Tichy'
              initial={{ filter: 'blur(8px)' }}
              animate={{ filter: 'blur(0)' }}
              exit={{ filter: 'blur(8px)' }}
              transition={{ ease: "linear", duration: 1 }}
            />
          </div>
        </Slide>
        <Slide
          background={{
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="container">
            <motion.img
              src={image2}
              alt='Boulimat'
              initial={{ filter: 'blur(8px)' }}
              animate={{ filter: 'blur(0)' }}
              exit={{ filter: 'blur(8px)' }}
              transition={{ ease: "linear", duration: 1 }}
            />
          </div>
        </Slide>
      </HeroSlider>
    </motion.div>
  )
}

export default Home