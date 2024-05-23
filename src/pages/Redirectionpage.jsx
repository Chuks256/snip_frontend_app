
import { useParams } from "react-router-dom"
import "../RedirectionStyle.css"

function Redirectionpage(){
    let params=useParams();
        window.onload=function(){
                fetch(`https://snip-1.onrender.com/api/getOriginalUrl/${params.referenceId}`)
                .then(async(response)=>{
                    return response.json()
                })
                .then(async(data)=>{
                    if(data){
                        // window.location=data.original_link
                        console.log(params.referenceId)
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