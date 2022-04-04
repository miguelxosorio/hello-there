import './projects.css'

function Projects({ img, link }) {
    return(
        <div className="projects">
            <div className="pb-container">
                <a href="https://github.com/miguelxosorio/weather-dashboard"><button className="btn">Github</button></a>
            </div>
            <a href="https://miguelxosorio.github.io/weather-dashboard/">
                <img src={img} alt="weather dashboard" className="project-img"></img>
            </a>
        </div>
    )
}

export default Projects