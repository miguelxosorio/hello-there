import React from 'react';
import './projects.css'

// passing in props img, link, ghlink
function Projects({ img, link, ghlink }) {
    console.log({img, link, ghlink})
    return(
        <div className="projects">
            <div className="pb-container">
                <a href={ghlink}><button className="btn">Github</button></a>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                {/* sample img src for now */}
                <img src={img} alt="project" className="project-img" />
            </a>
        </div>
    )
}

export default Projects