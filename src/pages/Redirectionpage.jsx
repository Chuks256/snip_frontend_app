
import { useParams } from "react-router-dom"
import "../RedirectionStyle.css"

function Redirectionpage(){
    let params=useParams();
    window.onload=async()=>{
        let get_params_data=params
        let prod_url=`https://snip-1.onrender.com/api/getOriginalUrl/${get_params_data.redirection_id}`
        let dev_url=`http://localhost:4005/api/getOriginalUrl/${get_params_data.redirection_id}`
        let get_original_url=await fetch(prod_url)
        let _data=await get_original_url.json()
        if(await _data.original_link){
            window.location=`https://${_data.original_link.slice(_data.original_link.indexOf("www"))}`
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