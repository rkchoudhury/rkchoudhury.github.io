import React from 'react';
import Section from '../common/section/Section';
import { highlightedFacts } from '../../configs';
import "./style.css";

const About = () => {
    return (
        <Section id="about" title="About" subTitle="From product requirements to production">
            <div className="about-grid">
                <div>
                    <p className="body-copy">
                        I'm a mobile-focused <strong>Senior Software Engineer</strong>{" "}
                        with <strong>8+ years of industry experience</strong>,
                        specializing in React Native, React and Android.
                    </p>
                    <p className="body-copy">
                        At <strong>EY GDS</strong>, I work on scalable React Native
                        applications, reusable components and third-party integrations,
                        with exposure to <strong>Re.Pack</strong> and micro-frontend
                        architecture.
                    </p>
                    <p className="body-copy">
                        Previously at <strong>Honeywell</strong>, I worked on HMI and
                        controller applications, BLE communication and a TypeScript
                        migration that reduced runtime errors by <strong>40%</strong>.
                        Earlier at <strong>Tech Mahindra</strong>, I built healthcare
                        applications featuring video, maps and chat.
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