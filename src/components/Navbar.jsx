
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
                <li><a href="#Documentation">Home</a></li>
                <li><a href="#Documentation">About</a></li>
                <li><a href="#Documentation">Github</a></li>
                <li><a href="#Documentation">Documentation</a></li>
            </ul>

            <button class="navBarBtn">Get Api</button>
        </div>
        </>
    )
}

export default Navbar;