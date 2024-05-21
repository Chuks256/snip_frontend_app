
import { useParams } from "react-router-dom"
import "../RedirectionStyle.css"
import { useEffect } from "react";

function Redirectionpage(){
    let params=useParams();
        // https://snip-eight.vercel.app
        window.onload=function(){
                fetch(`http://localhost:4005/api/getOriginalUrl/${params.referenceId}`)
                .then(async(response)=>{
                    return response.json()
                })
                .then(async(data)=>{
                    if(data){
                        window.location=data.original_link
                    }
                })
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