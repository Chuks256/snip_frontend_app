
import { useParams } from "react-router-dom"
import "../RedirectionStyle.css"

function Redirectionpage(){
    let params=useParams();
    window.onload=()=>{
        fetch(`https://snip-eight.vercel.app/api/getOriginalUrl/${params.referenceId}`)
        .then(async(response)=>{
            return response.json()
        })
        .then(async(data)=>{
            window.location=data.link
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