import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { profile } from '../../configs';
import { Phone } from '../common/phone/Phone';
import "./style.css";

interface IProps {
    goTo: (id: string) => void;
}

const HeroSection = ({ goTo }: IProps) => {
    const firstName = profile.name.split(" ")?.[0]?.toUpperCase() ?? "";
    return (
        <section id="home" className="hero">
            <div className="hero-grid" />
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="container hero-content">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
                    <div className="availability"><span /> Open to interesting engineering conversations</div>
                    <p className="hero-kicker">HELLO, I'M {firstName}</p>
                    <h1>Building <em>mobile</em> experiences that scale.</h1>
                    <p className="hero-copy">
                        Senior Software Engineer focused on React Native, modern frontend architecture
                        and full-stack product development.
                    </p>
                    <div className="hero-actions">
                        <button className="primary" onClick={() => goTo("projects")}>Explore my work <ArrowUpRight size={17} /></button>
                        <a className="secondary" href={`/${profile.resume}`} download>Download resume <Download size={16} /></a>
                    </div>
                    <div className="socials">
                        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
                        <a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
                    </div>
                </motion.div>

                <motion.div
                    // className="code-card"
                    initial={{ opacity: 0, scale: .96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .8, delay: .15 }}
                >
                    {/* <div className="code-top"><span /><span /><span /><label>rakesh.ts</label></div>
                    <pre><code><span className="muted">const</span> <span className="cyan">engineer</span> = {'{'}
                        {`  `}<span className="key">experience</span>: <span className="num">8+</span>,
                        {`  `}<span className="key">focus</span>: <span className="str">"React Native"</span>,
                        {`  `}<span className="key">frontend</span>: [<span className="str">"React"</span>, <span className="str">"TypeScript"</span>],
                        {`  `}<span className="key">backend</span>: [<span className="str">"Node.js"</span>, <span className="str">"MongoDB"</span>],
                        {`  `}<span className="key">architecture</span>: <span className="str">"Micro-frontends"</span>,
                        {`  `}<span className="key">mindset</span>: <span className="str">"Build. Learn. Improve."</span>
                        {'}'};</code></pre> */}
                    <Phone />
                </motion.div>
            </div>
            <button className="scroll-cue" onClick={() => goTo("about")}><ChevronDown size={18} /></button>
        </section>
    );
}

export default HeroSection;