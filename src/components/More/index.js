import "./more.css";
import dp from "../../assets/display-photo/dp.jpg"

function More() {
    return (
        <div className="more">
            <div className="more-left">
                <div className="more-card-bg"></div>
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
                    I was a nurse for almost 10 years until I decided to devote my attention to web development, and it is a lot of fun!
                    Not until I was learning how to code did I realize how much logic flows in each of the functionalities in our applications.
                    <br></br>
                    <br></br>
                    I hope I get to create something with you.
                    <br></br>
                    <br></br>
                    besides that, I also <a href="https://miguelosorio.myportfolio.com/">photograph</a>.
                </p>
            </div>
        </div>
    )
}

export default More;