
import "../NavbarStyle.css"
import logo from "../assets/logo.png";
function Navbar(){
    return(
        <>
        <div className="navContainer">
            <div className="navLogoContainer">
            <img src={logo} className='NavBarLogo' alt="" />
                <h3>Snip.</h3>
            </div>

            <ul class="navListContainer">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="https://github.com/Chuks256/snip_frontend_app">Github</a></li>
                <li><a href="#Documentation">Documentation</a></li>
            </ul>

            <button class="navBarBtn">Get Api</button>
        </div>
        </>
    )
}

export default Navbar;