import React from 'react';
import './Videos.css';
import video from '../../res/videos/bej.mp4';
import { motion } from 'framer-motion';

const Videos = () => {
  return (
    <motion.section
      className="videos"
      id="videos"
      initial={{ filter: 'blur(8px)' }}
      animate={{ filter: 'blur(0)' }}
      exit={{ filter: 'blur(8px)' }}
      transition={{ ease: "linear", duration: .6 }}
    >
      <div className="heading">
        <h2>See The Best Views</h2>
      </div>
      <div className="video-container text-focus-in">
        <motion.video
          src={video}
          muted autoPlay loop
          initial={{ filter: 'blur(8px)' }}
          animate={{ filter: 'blur(0)' }}
          exit={{ filter: 'blur(8px)' }}
          transition={{ ease: "linear", duration: 1 }} />
      </div>

    </motion.section>
  )
}

export default Videos