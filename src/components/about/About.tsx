import React from 'react';
import Section from '../common/section/Section';
import "./style.css";

const About = () => {
    return (
        <Section id="about" eyebrow="01 / ABOUT" title="Engineering with a product mindset.">
            <div className="about-grid">
                <div>
                    <p className="large-copy">
                        I'm a mobile-focused software engineer with{" "}
                        <strong>8+ years of industry experience</strong>, specializing in
                        React Native, React and Android.
                    </p>
                    <p className="body-copy">
                        At <strong>EY GDS</strong>, I work on scalable React Native
                        applications, reusable components and third-party integrations,
                        including exposure to <strong>Re.Pack</strong> micro-frontend
                        architecture.
                    </p>
                    <p>
                        Previously at <strong>Honeywell</strong>, I worked on
                        HMI/controller applications, BLE communication and a TypeScript
                        migration that reduced runtime errors by <strong>40%</strong>.
                        Earlier, at <strong>Tech Mahindra</strong>, I built healthcare
                        experiences with video, maps and chat.
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