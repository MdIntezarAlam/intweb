import Header from '../Header/Header';
import int from './../../Images/int.jpeg'
import './About.modul.css';

const About = () => {
    return (
        <div className="about_page">
            <Header title={'About Me'} />
            <div className="about_container_left">
                <div className="about_container_left_content">
                    Hi, i'm Md Intezar Alam,i am a computer Science Engineering Student in Chaitanya Institute of Technology & Science. 
                    I'm Specialist in React Development, Web Development & freelancer ....
                    <br />
                    I am Specialist in Front end developer, React Js developer, I'm Specilist in HTML-5, CSS-3, Bootstrap, Javascript & React js
                    I hava Confident to learn new technology.
                </div>
                <div className="about_container_right"> <img src={int} className="img" /></div>
            </div>
        </div>
    )
}
export default About;
