import React from 'react'
import { profile } from '../configs'

const Footer = () => {
    return (
        <footer>
            <div className="container footer-inner">
                <p>© {new Date().getFullYear()} {profile.name}</p>
                <p>"Build. Learn. Improve."</p>
                <p>Made with ❤️ in India</p>
            </div>
        </footer>
    )
}

export default Footer