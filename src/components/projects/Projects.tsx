import React from 'react';
import Section from '../common/section/Section';
import ProjectCard from '../common/card/Card';
import { projects, personalProjects } from '../../configs';
import "./style.css";

const Projects = () => {
    return (
        <Section id="projects" title="Projects" subTitle="Selected work">
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={`${project.title}-${index}`} {...project} />
                ))}
                {personalProjects.map((project, index) => (
                    <ProjectCard key={`${project.title}-${index}`} {...project} />
                ))}
            </div>
        </Section>
    )
}

export default Projects;