import React from 'react'
import './nav.css'
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nes">
            <div className="container-fluid">
                <a className="navbar-brand home" href="/">Home</a>
                <button className="navbar-toggler cc" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   menu <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link active  new" aria-current="page" href="about">About</a></li>
                    <li className="nav-item"><a className="nav-link active  new" aria-current="page" href="skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link active  new" aria-current="page" href="app">Project</a></li>
                    <li className="nav-item"><a className="nav-link active  new" aria-current="page" href="contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
