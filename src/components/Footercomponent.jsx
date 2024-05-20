import Group4 from "../assets/Group4.png"
import Group5 from "../assets/Group5.png"
import Group6 from "../assets/Group6.png"
import "../FooterStyle.css"

function Footercomponent(){
    return(
        <>
        <div className="marquee_container">
        <div className="footerContainer">
            <img src={Group4} alt="" className="footer_img"/>
            <img src={Group5} alt="" className="footer_img"/>
            <img src={Group6} alt="" className="footer_img"/>
            <img src={Group5} alt="" className="footer_img"/>
            <img src={Group6} alt="" className="footer_img"/>
            <img src={Group5} alt="" className="footer_img"/>
            <img src={Group6} alt="" className="footer_img"/>
        </div>
        </div>
        </>
    )
}

export default Footercomponent