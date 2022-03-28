import React from "react";

function Resume() {
    return(
        <div>
            <div>
                <h1>Resume</h1>
            </div>
            <div>
                <a href={require('../../assets/resume/resume.pdf')}><button>Resume</button></a>
            </div>
            <div>
                <ul>
                    <li>
                        <p>HTML</p>
                    </li>
                    <li>
                        <p>CSS</p>
                    </li>
                    <li>
                        <p>Javascript</p>
                    </li>
                    <li>
                        <p>Node</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;