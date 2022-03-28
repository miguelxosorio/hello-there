import React from "react";

function Portfolio () {
    return(
        // container
        <div>
            <div>
                <h1>Portfolio</h1>
            </div>
            {/* carousel */}
            <div>
                {/* card */}
                <div class="card mb-3">
                    <a href="https://miguelxosorio.github.io/weather-dashboard/"><img src={require('../../assets/gif/wdb.gif')} className="card-img-top" alt="weather dashboard app"></img></a>
                <div class="card-body">
                    <h5 class="card-title">Weather Dashboard</h5>
                    <p class="card-text">This is a weather dashboard app, Click the image to take you to the app</p>
                </div>
                <div>
                    <a href="https://github.com/miguelxosorio/weather-dashboard"><button>Github</button></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Portfolio;