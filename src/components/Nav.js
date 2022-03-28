import React from "react";

function Nav({ currentPage, pageChange }) {
    
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                {/* ternary operators for if condition */}
                <a href="#about" onClick={() => pageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className="nav-item">
                <a href="#contact" onClick={() => pageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
            <li className="nav-item">
                <a href="#portfolio" onClick={() => pageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a href="#resume" onClick={() => pageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
        </ul>
    )
}

export default Nav;
