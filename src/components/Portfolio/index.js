import Projects from "../Projects/index";
import "./portfolio.css"

function Portfolio () {
    return(
        <div className="portfolio">
            <div className="p-texts">
                <h1 className="p-title">Let's Work Together</h1>
                <p className="p-description">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div className="p-list">
                <Projects />
                <Projects />
                <Projects />
                <Projects />
                <Projects />
            </div>
        </div>
    )
}

export default Portfolio;