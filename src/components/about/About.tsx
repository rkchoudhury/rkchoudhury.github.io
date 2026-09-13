import React from 'react';
import Section from '../common/section/Section';
import { highlightedFacts } from '../../configs';
import "./style.css";

const About = () => {
    return (
        <Section id="about" eyebrow="01 / ABOUT" title="From product requirements to production">
            <div className="about-grid">
                <div>
                    <p className="body-copy">
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
                    <p className="body-copy">
                        Previously at <strong>Honeywell</strong>, I worked on
                        HMI/controller applications, BLE communication and a TypeScript
                        migration that reduced runtime errors by <strong>40%</strong>.
                        Earlier, at <strong>Tech Mahindra</strong>, I built healthcare
                        experiences with video, maps and chat.
                    </p>
                </div>
                <div className="facts">
                    {highlightedFacts.map(({ label, text }, i) => (
                        <div
                            className="fact"
                            key={label}
                        >
                            <span>[0{i + 1}]</span>
                            <p>
                                <strong>{label}:</strong> {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

    );
}

export default About;