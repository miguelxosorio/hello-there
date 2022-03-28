import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact"

function Container() {
    return(
        <div>
            <section>
                <About />
            </section>
            <div>
                <Contact />
            </div>
        </div>
    )
}

export default Container;