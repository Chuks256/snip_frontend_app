import "../mainComponentStyle.css"
import { useState} from "react";
import "../modalStyle.css"
import copy from "../assets/copy.png"
import Errorcomponent from "./Errorcomponent";

function Maincomponent(){
    let [url_input,set_url_input]=useState("")
    let [color,setColor]=useState("transparent");
    let [modalState,setModalState]=useState("none");
    let [data,setData]=useState("")
    let [btnState,setBtnState]=useState("Snip Url")

    let [errorState,setErrorState]=useState("-200%")

    let handleChange=(event)=>{
        set_url_input(event.target.value)
    }

    let checkMate=(ev)=>{
        ev.preventDefault();
        let get_input_value=url_input;
        if(get_input_value.length>0){
            setColor("transparent")
            setBtnState("wait..");
                //  define use effect hookk 
                // "https://snip-eight.vercel.app/api/snip_url"
                // "http://localhost:4005/getAllData"
                // https://snip-eight.vercel.app/api/snip_url?OriginalUrl=${url_input}
                fetch(`https://snip-eight.vercel.app/api/snip_url?originalUrl=${get_input_value}`)
            .then(async (response)=>{
                return response.json()
            })
            .then(async(data)=>{
                if(data){
                     await setData(data)
                     await setModalState("flex")
                    await setBtnState("Snip Url")
                }
            }).catch(async(err)=>{
                if(err){
                    await setErrorState("50%")
                    await setBtnState("Snip Url")
                    setTimeout(()=>{
                        setErrorState("-200%")
                    },2000)
                    clearTimeout();
                }
            })

        }
        if(get_input_value.length===0){
            setColor("red");
        }
    }


    let closeModalBox=()=>{
        setModalState("none")
    }

    return(
        <>
<Errorcomponent yAxis={errorState} />
{/* modal section beginning */}
<div style={{display:modalState}} className="modalContainer">
        <div className="modalBox">
            <div className="modal_url_showcase">
                <img src={copy} alt=""  className="copyIcon"/>
                <div className="modal_url">{`${window.location.href}i/${data.reference}`}</div>
            </div>
            <div className="modal_info">
                <p className="modal_info_detail">
                Hey, user hope there was not any issue, if there is contact the developers team @Chuks,
                or place an issue @ the github repo
                </p>
            </div>
            <button onClick={closeModalBox} className="modal_done_btn">Cancel</button>
        </div>
       </div>
{/* model section ending */}

        <div className="mainContainer">
            <input type="text" style={{borderColor:color}} value={url_input} onChange={handleChange} className="mainTxtInput" />
            <button onClick={checkMate}  className="mainTxtBtn">{btnState}</button>
        </div>
        </>
    )

    }
export default Maincomponent;