import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Shared page wrapper: sets the document title and animates route changes.
const Page = ({ title, className = '', children }) => {
    useEffect(() => {
        document.title = title ? `${title} · Béjaïa Tour` : 'Béjaïa Tour — the pearl of the Mediterranean';
    }, [title]);

    return (
        <motion.main
            className={className}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
        >
            {children}
        </motion.main>
    );
};

export default Page;
