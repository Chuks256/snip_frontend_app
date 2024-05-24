import Navbar from "../components/Navbar.jsx"
import Headercomponent from '../components/Headercomponent.jsx'
import Maincomponent from '../components/Maincomponent.jsx'
import Footercomponent from "../components/Footercomponent.jsx"

function Landingpage(){
   window.onload=async()=>{
      let bootstart_server = await fetch(`https://snip-1.onrender.com/check_status`);
      await bootstart_server.json();
   }
   return(
    <>
    <Navbar />
    <Headercomponent />
    <Maincomponent />
    <Footercomponent/>
    </>
   ) 
}

export default Landingpage;