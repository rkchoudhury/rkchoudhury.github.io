import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from './Section';
import { projects } from '../configs';

const Projects = () => {
    return (
        <Section id="projects" eyebrow="03 / PROJECTS" title="Things I've built.">
            <div className="project-grid">
                {projects.map((project, i) => (
                    <motion.article
                        className="project-card"
                        key={project.title}
                        whileHover={{ y: -7 }}
                        transition={{ duration: .2 }}
                    >
                        <div className="project-number">0{i + 1}</div>
                        <div className="project-type">{project.type}</div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tags">{project.stack.map((s) => <span key={s}>{s}</span>)}</div>
                        <div className="project-footer">
                            <span>{project.period}</span>
                            <a href={project.github} target="_blank" rel="noreferrer">Source <ArrowUpRight size={15} /></a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    )
}

export default Projects;