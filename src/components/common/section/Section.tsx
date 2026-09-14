import React from 'react';
import { motion } from "framer-motion";
import "./style.css";

interface IProps {
    id: string;
    title: string;
    subTitle: string;
    children: React.ReactNode;
};

const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const Section = ({ id, title, subTitle, children }: IProps) => {
    return (
        <section id={id} className="section">
            <motion.div
                className="container"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <h2 className='section-title'>{title}</h2>
                <p className='section-subtitle'>{subTitle}</p>
                <div className='section-content'>
                    {children}
                </div>
            </motion.div>
        </section>
    );
}

export default Section;