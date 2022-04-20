import Header from '../Header/Header';
import './Skills.modul.css';
import a from './../../Images/a.jpg'

const ListTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBootm: '4px', }
let frontendSkills =
    <ul>
        <li style={ListTitleStyle}>FROENTEND DEVELOPER:-</li>
        <li>HTML, HTML5</li>
        <li>CSS, CSS3</li>
        <li>JavaScript</li>
        <li>React Js</li>
        <li>Next Js</li>
    </ul>
let backendSkills =
    <ul>
        <li style={ListTitleStyle}>BACKEND DEVELOPER:-</li>
        <li>Scala</li>
        <li>java</li>
        <li>SQl</li>
        <li>PHP</li>
    </ul>
let frameworkSkills =
    <ul>
        <li style={ListTitleStyle}>Framework:-</li>
        <li>Bootstrap</li>
        <li>Bootstrap</li>
    </ul>
let otherSkills =
    <ul>
        <li style={ListTitleStyle}>Other:-</li>
        <li>Figma</li>
        <li>Git</li> 
        <li>GitHub</li> 
        <li>Json</li> 
        <li>XML</li>
    </ul>
let totalSkills = [frontendSkills, backendSkills, frameworkSkills, otherSkills]

const Skills = () => {
    return (
        <div className='Skills_page' id="skills">
            <Header title={'What About The Skills'} />
            <p>
                I'm a life long lerner and enjoy learning new stuff!
                Bellow are some programming languages, toolkits, framsworks and libraries that i worked with and like.
                Some of them I control better than the other. <br />
                Frontend development using modern technology such as React. I follow the best folder structure so that code will be more re-usable, scalable and flexibile. I mainly focus on code quality and performance. Redux or redux toolkit, localstorage and cookies are used for the state management.
                </p>
            <div className="contan_img">
            <img src={a} alt="a" />
                {
                    totalSkills.map(skills => {
                        return (
                            <div className="list">
                                {skills}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default Skills