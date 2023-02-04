import logo from "../assets/icons/Logo.svg"
import Nav from "./Nav"

const Header = () => {
    return (
    <header>
        <div className="container-header">
            <img className="logo" src={logo} alt="Little Lemon logo"/>
            <Nav />
        </div>
    </header>
    )
}

export default Header

