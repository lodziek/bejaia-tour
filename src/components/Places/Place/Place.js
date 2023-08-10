import React from 'react';
import { infos } from './text';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Place.css';

const Place = () => {
    const { id } = useParams();
    return (
        <motion.section
            className='place'
            initial={{ filter: 'blur(8px)' }}
            animate={{ filter: 'blur(0)' }}
            exit={{ filter: 'blur(8px)' }}
            transition={{ ease: "linear", duration: .5 }}>
            <div className="heading place-heading">
                <h2>{infos[id].title}</h2>
            </div>
            <div className="place-container">
                <div className="text">{infos[id].description}</div>
                <Link to="/places" className="btn neon place-btn"><i className='bx bx-left-arrow-alt pl-icon'></i>Go Back</Link>
            </div>
        </motion.section >
    )
}

export default Place