import React from 'react';
import Section from '../common/section/Section';
import ProjectCard from '../common/card/Card';
import { projects, personalProjects } from '../../configs';
import "./style.css";

const Projects = () => {
    return (
        <Section id="projects" title="Projects" subTitle="">
            <h4>Professional Work</h4>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={`${project.title}-${index}`} {...project} />
                ))}
            </div>
            <h4>Personal Projects</h4>
            <div className="project-grid">
                {personalProjects.map((project, index) => (
                    <ProjectCard key={`${project.title}-${index}`} {...project} />
                ))}
            </div>
        </Section>
    )
}

export default Projects;