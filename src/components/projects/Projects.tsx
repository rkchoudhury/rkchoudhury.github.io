import React from 'react';
import Section from '../common/section/Section';
import Card from '../common/card/Card';
import { projects, personalProjects } from '../../configs';
import "./style.css";

const Projects = () => {
    return (
        <Section id="projects" title="Projects" subTitle="Selected work">
            <div className="project-grid">
                {projects.map((project) => <Card project={project} />)}
                {personalProjects.map((project) => <Card project={project} />)}
            </div>
        </Section>
    )
}

export default Projects;