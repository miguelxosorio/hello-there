import React from "react";

function Nav({ currentPage, pageChange }) {
    return (
        <ul>
            <li>
                <a href="#about" onClick={() => pageChange('About')} className={currentPage}>About</a>
            </li>
            <li>
                <a href="#contact" onClick={() => pageChange('Contact')} className={currentPage}>Contact</a>
            </li>
        </ul>
    )
}

export default Nav;
