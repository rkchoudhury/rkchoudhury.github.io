import React from 'react';
import Section from './Section';

const About = () => {
    return (
        <Section id="about" eyebrow="01 / ABOUT" title="Engineering with a product mindset.">
            <div className="about-grid">
                <div>
                    <p className="large-copy">
                        I’m a software engineer with experience across mobile, frontend and backend
                        development. My core strength is turning complex product requirements into
                        maintainable, reusable applications.
                    </p>
                    <p className="body-copy">
                        My work spans enterprise mobile applications, healthcare products, industrial
                        controller interfaces and full-stack side projects. I enjoy architecture,
                        performance, clean code and solving problems that have a measurable impact.
                    </p>
                </div>
                <div className="stat-grid">
                    <div><strong>8+</strong><span>Years experience</span></div>
                    <div><strong>3</strong><span>Major organizations</span></div>
                    <div><strong>50+</strong><span>JS files migrated to TS</span></div>
                    <div><strong>40%</strong><span>Runtime error reduction</span></div>
                </div>
            </div>
        </Section>

    );
}

export default About;