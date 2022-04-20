import './Header.modul.css'

const Header = (props) => {
    return (
        <div className="container">
            <hr />
            <h6>{props.title}</h6>
        </div>
    )
}
export default Header