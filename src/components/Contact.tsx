import React from 'react'
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { profile } from '../configs';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container contact-inner">
                <p className="eyebrow">05 / CONTACT</p>
                <h2>Have an interesting problem?</h2>
                <p>Let's build something useful, reliable and a little bit delightful.</p>
                <div className="socials">
                    <a className="secondary" href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
                    <a className="secondary" href={`tel:${profile.phone}`}><Phone size={18} /> Phone</a>
                    <a className="secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
                    <a className="secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
                    <a className="secondary" href={`/${profile.resume}`} download><Download size={18} /> Download resume </a>
                </div>
            </div>
        </section>
    )
}

export default Contact