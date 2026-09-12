import React from 'react';
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from '../../configs';
import "./style.css";

interface IProps {
    menuOpen: boolean;
    setMenuOpen: (isMenuOpened: boolean) => void;
    goTo: (id: string) => void;
}

const Header = ({ menuOpen, setMenuOpen, goTo }: IProps) => {
    return (
        <header className="nav-wrap">
            <nav className="nav container">
                <button className="brand" onClick={() => goTo("home")}>
                    <span>{profile.nickName}</span>
                    <strong>{profile.name}</strong>
                </button>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {["about", "experience", "projects", "skills"].map((item) => (
                        <button key={item} onClick={() => goTo(item)}>
                            {item}
                        </button>
                    ))}
                    <button className="nav-contact" onClick={() => goTo("contact")}>Get in touch <ArrowUpRight size={15} /></button>
                </div>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </nav>
        </header>
    );
}

export default Header