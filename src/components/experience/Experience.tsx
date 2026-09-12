import React from 'react';
import { motion } from "framer-motion";
import Section from '../common/section/Section';
import { experience } from '../../configs';
import "./style.css";

const Experience = () => {
    return (
        <Section id="experience" eyebrow="02 / EXPERIENCE" title="Where I've built things.">
            <div className="timeline">
                {experience.map((job, i) => (
                    <motion.article
                        className="timeline-item"
                        key={job.company}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * .08 }}
                    >
                        <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
                        <div className="timeline-main">
                            <div className="job-head">
                                <div><h3>{job.role}</h3><p>{job.company} · {job.location}</p></div>
                                <time>{job.period}</time>
                            </div>
                            <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}

export default Experience;