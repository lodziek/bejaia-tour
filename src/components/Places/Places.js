import React from 'react';
import './Places.css';
import Card from './Card';
import { motion } from 'framer-motion';
import { infos } from './Place/text';

const Places = (props) => {
    return (
        <motion.section
            className="places"
            id="places"
            initial={{ filter: 'blur(8px)' }}
            animate={{ filter: 'blur(0)' }}
            exit={{ filter: 'blur(8px)' }}
            transition={{ ease: "linear", duration: .5 }}
        >
            <div className="heading">
                <h2>Find The Most Attractive Places</h2>
            </div>
            <div className="places-container">
                {infos.map((i) => {
                    return (
                        <Card key={i.id} img={i.image} title={i.title} id={i.id} />
                    )
                })}
            </div>
        </motion.section>
    )
}

export default Places