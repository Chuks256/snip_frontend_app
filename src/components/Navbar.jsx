
import "../NavbarStyle.css"
import logo from "../assets/logo.png";
import {useState} from "react"

function Navbar(){

    let [installPrompt,setInstallPrompt]=useState(null)
    let [btnVisibility,setBtnVisibility]=useState("100%")

    // check if user already installed app 
    window.addEventListener("load",(ev)=>{
        ev.preventDefault();
        let checkInstalledApp=window.matchMedia("(display-mode:standalone)").matches;
        if(checkInstalledApp==true){
            setBtnVisibility("0%") // set visibility if app is installed 
        }
    })

    window.addEventListener("beforeinstallprompt",(ev)=>{
        ev.preventDefault();
        setInstallPrompt(ev);
    })

    // function to handle app installation  
    let installHandler=async()=>{
        if(installPrompt !== null){
            installPrompt.prompt();
            installPrompt.userChoice(outcome=>{
                if(outcome==="accepted"){
                    setInstallPrompt(null)
                return setBtnVisibility("0%")
                }
                if(outcome==="rejected"){
                    console.log("app failed")
                }
            })
        }
    }

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
            
            <button style={{"opacity":`${btnVisibility}`}} class="navBarBtn" onClick={installHandler} >Install App</button>
        </div>
        </>
    )
}

export default Navbar;