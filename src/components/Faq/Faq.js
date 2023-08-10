import React from 'react';
import './Faq.css';
import { Collapse, ConfigProvider } from 'antd';
import { motion } from 'framer-motion';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const text = `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus beatae earum amet, eum iste, id cum libero nam dignissimos sed nobis. Autem, deserunt. Ullam officia quae sit quaerat impedit nemo amet repellendus, rerum quam! Rerum ipsum, nisi non distinctio est quidem nostrum, necessitatibus, voluptates odio aut dolores. Obcaecati, laboriosam esse.
`;
const items = [
    {
        key: '1',
        label: 'Is It easy to find rentals and condos ?',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'Is there Shopping places and handcraft art shops ?',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'Where can I find Car rental Services ?',
        children: <p>{text}</p>,
    },
    {
        key: '4',
        label: 'Is Bejaia only summer town or It\'s all along the year ?',
        children: <p>{text}</p>,
    },
    {
        key: '5',
        label: 'Can I find an airport near Bejaia or I should go to another town ?',
        children: <p>{text}</p>,
    },{
        key: '6',
        label: 'What are the best museums and cultural places to visit ?',
        children: <p>{text}</p>,
    },
];

const Faq = () => {
    return (
        <motion.section
            className='faq'
            initial={{ filter: 'blur(8px)' }}
            animate={{ filter: 'blur(0)' }}
            exit={{ filter: 'blur(8px)' }}
            transition={{ ease: "linear", duration: .5 }}
        >
            <div className="heading">
                <h2>FAQ</h2>
            </div>
            <ConfigProvider>
                <Collapse
                    accordion
                    items={items}
                    expandIcon={({isActive})=>{
                        return isActive ? <MinusOutlined /> : <PlusOutlined />
                    }}
                    expandIconPosition={'end'}                    
                />
            </ConfigProvider>
        </motion.section>
    )
}

export default Faq;