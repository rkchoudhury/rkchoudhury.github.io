import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container footer-inner">
                <p>© {new Date().getFullYear()} Rakesh Choudhury</p>
                <p>Made with 💓 in India</p>
            </div>
        </footer>
    )
}

export default Footer