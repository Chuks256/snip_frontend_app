import "../HeaderStyle.css"
import Group4 from "../assets/Group4.png"
import Group5 from "../assets/Group5.png"
import Group6 from "../assets/Group6.png"

function Headercomponent(){
    return(
        <>
        <div className="headerContainer">
            <h1 className="headerTxt">Open Source Link Shortner For <span className="gradientTxt">All</span></h1>
            <p className="headerDetails">Shorten your long and gibberish link or url with Snip </p>
        </div>
        </>
    )
}

export default Headercomponent