
import { useParams } from "react-router-dom"
import "../RedirectionStyle.css"
import { useEffect } from "react";

function Redirectionpage(){
    let params=useParams();
    window.onload=async()=>{
        let get_params_data=params
        let prod_url=`https://snip-1.onrender.com/api/getOriginalUrl/${get_params_data.redirection_id}`
        let dev_url=`http://localhost:4005/api/getOriginalUrl/${get_params_data.redirection_id}`
        let get_original_url=await fetch(prod_url)
        let _data=await get_original_url.json()
        if(await _data.original_link){
            let parse_url_link=_data.original_link.split("://");
                // window.location.href=`https://${parse_url_link[1]}`
                window.open(`https://${parse_url_link[1]}`)
                console.log(parse_url_link)
        }
    }

    return(
        <>
        <div className="redirectionContainer">
            <h2 class="redirection_txt">
                 Please Wait...
                 While You Are Being Redirected
            </h2>
        </div>
        </>
    )
}

export default Redirectionpage