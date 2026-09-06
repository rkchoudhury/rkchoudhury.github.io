import React from 'react'
import Section from './Section';
import { skills } from '../configs';

const Skills = () => {
    return (
        <Section id="skills" eyebrow="04 / TOOLBOX" title="Technologies I work with.">
            <div className="skills-grid">
                {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <div className="skill-card" key={skill.title}>
                            <Icon size={22} />
                            <h3>{skill.title}</h3>
                            <div className="skill-list">{skill.items.map(x => <span key={x}>{x}</span>)}</div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}

export default Skills;