import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Download, ChevronDown, PhoneIcon } from "lucide-react";
import { profile } from '../../configs';
import { Phone } from '../common/phone/Phone';
import "./style.css";

interface IProps {
    goTo: (id: string) => void;
}

const HeroSection = ({ goTo }: IProps) => {
    return (
        <section id="home" className="hero">
            <div className="hero-grid" />
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="container hero-content">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
                    <p className="hero-kicker">React Native · TypeScript · Android · 8+ years</p>
                    <h1 className="enter">
                        I build mobile experiences that <em>scale.</em>
                    </h1>
                    <p className="hero-copy">
                        I'm <strong>Rakesh Choudhury</strong> — a Senior Software Engineer
                        focused on{" "}
                        <strong>
                            React Native, Android, and modern frontend development
                        </strong>
                        . I build reusable components, integrate complex capabilities, and
                        turn product requirements into reliable, production-ready experiences.
                    </p>
                    <div className="hero-actions">
                        <button className="primary" onClick={() => goTo("projects")}>Explore my work <ArrowUpRight size={17} /></button>
                        <a className="secondary" href={`/${profile.resume}`} download>Download resume <Download size={16} /></a>
                    </div>
                    <div className="socials">
                        <a href={`mailto:${profile.email}`}><Mail size={18} /></a>
                        <a href={`tel:${profile.phone}`}><PhoneIcon size={18} /></a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
                        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /></a>
                    </div>
                    <p className="loc enter">
                        <span /> Bangalore, India · open to interesting opportunities
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: .96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .8, delay: .15 }}
                >
                    <Phone />
                </motion.div>
            </div>
            <button className="scroll-cue" onClick={() => goTo("about")}><ChevronDown size={18} /></button>
        </section>
    );
}

export default HeroSection;