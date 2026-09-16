import Section from '../common/section/Section';
import { skills } from '../../configs';
import "./style.css";

const Skills = () => {
    return (
        <Section id="skills" title="Skills" subTitle="Technologies I work with">
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
            <p className="skills-note">
                <strong>Beyond my core experience:</strong> I've explored Android,
                Kotlin, Jetpack Compose and Node.js through hands-on projects, and I'm
                keen to apply and deepen these skills in production environments.
            </p>
        </Section>
    );
}

export default Skills;