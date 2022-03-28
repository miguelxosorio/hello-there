import React from "react";

function Portfolio () {
    return(
        // container
        <div>
            {/* carousel */}
            <div>
                {/* card */}
                <div>
                    <h2>Weather Dashboard</h2>
                    <a href="https://miguelxosorio.github.io/weather-dashboard/"><img src={require('../../assets/gif/wdb.gif')} alt="weather dashboard app"></img></a>
                    <a href="https://github.com/miguelxosorio/weather-dashboard"><button>Github</button></a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;