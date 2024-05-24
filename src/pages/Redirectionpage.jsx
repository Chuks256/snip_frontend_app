
import { useParams } from "react-router-dom"
import "../RedirectionStyle.css"

function Redirectionpage(){
    let params=useParams();
    window.onload=async()=>{
        let get_params_data=params
        let get_original_url=await fetch(`https://snip-1.onrender.com/api/getOriginalUrl/${get_params_data.redirection_id}`)
        let _data=await get_original_url.json()
        if(await _data.original_link){
            window.location.href=`https://${_data.original_link.slice(_data.original_link.indexOf("www"))}`
        }
    }

    return(
        <>
        <div className="redirectionContainer">
            <h2 class="redirection_txt">
                Redirecting you to destinated url, Please Wait...
            </h2>
        </div>
        </>
    )
}

export default Redirectionpage