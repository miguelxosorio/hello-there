import "./more.css";
import dp from "../../assets/display-photo/dp.jpg"

function More() {
    return (
        <div className="more">
            <div className="more-left">
                <div className="more-card bg"></div>
                <div className="more-card">
                    <img src={dp} alt="" className="more-image"></img>
                </div>
            </div>
            <div className="more-right">
                <h1 className="more-title">About Me</h1>
                <p className="more-subtitle">
                    I heard you needed a website, How can I help?
                </p>
                <p className="more-subtitle-content">
                    I am a Nurse turned into a Full Stack Web Developer.
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </div>
    )
}

export default More;