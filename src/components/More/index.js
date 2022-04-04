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
            <div className="more-right"></div>
        </div>
    )
}

export default More;