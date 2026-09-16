import { motion } from "framer-motion";
import Section from '../common/section/Section';
import { experience } from '../../configs';
import "./style.css";

const Experience = () => {
    return (
        <Section id="experience" title="Experience" subTitle="8+ years across three companies">
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
                                <div><h3>{job.company}</h3><p>{job.role} · {job.location}</p></div>
                                <time>{job.period}</time>
                            </div>
                            <ul>{job.points.map((point, index) => <li key={job.company + index}>{point}</li>)}</ul>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}

export default Experience;