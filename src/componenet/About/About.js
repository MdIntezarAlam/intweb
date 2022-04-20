import Header from '../Header/Header';
import int from './../../Images/int.jpeg'
import './About.modul.css';

const About = () => {
    return (
        <div className="about_page">
            <Header title={'About Me'} />
            <div className="about_container_left">
                <div className="about_container_left_content">
                    Hi, i'm Md Intezar Alam,i am a computer Science Engineering Student in Chaitanya Institute of Technology & Science. I'am curently in
                    I'm Specialist in Coding Language, digital marketeing | freelancer more...
                    the main reason I am passionate about developing a new Technology
                    I also like to learn new technologies by experimenting by myself.
                    for instance last month I created a lot of Responsive website that uses Coding Language because I was curious about how the website should intract to user
                    that is why I am interested in your company since I know it's committed to innovation.
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