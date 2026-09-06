import React from 'react';
import { motion } from "framer-motion";

interface IProps {
    id: string;
    eyebrow: any;
    title: string;
    children: React.ReactNode;
};

const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const Section = ({ id, eyebrow, title, children }: IProps) => {
    return (
        <section id={id} className="section">
            <motion.div
                className="container"
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <p className="eyebrow">{eyebrow}</p>
                <h2>{title}</h2>
                {children}
            </motion.div>
        </section>
    );
}

export default Section;