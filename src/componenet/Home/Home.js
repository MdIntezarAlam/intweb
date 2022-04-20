import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Home.modul.css'
const Home = () => {
    return (
        <>
            <main id="home">
                <section>
                    <h2>Hii, I am</h2>
                    <h3>Md Intezar Alam</h3>
                    <h1>I am <span className="change_content"></span></h1>
                    <a href="https://github.com/MdIntezarAlam"><IconButton id="btn1"><GitHubIcon /></IconButton></a>
                    <a href="https://www.instagram.com/mdintezar_a/"><IconButton id="btn2"><InstagramIcon /></IconButton></a>
                    <a href="https://www.facebook.com/mdintezar_a/"><IconButton  id="btn3"><FacebookIcon /></IconButton></a>
                    <a href="https://www.linkedin.com/in/md-intezar-alam-92814b226/"><IconButton  id="btn4"><LinkedInIcon /></IconButton></a>
                </section>
            </main>
        </>
    )
}
export default Home;