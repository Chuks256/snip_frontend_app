
import "../ErrorStyle.css"

function Errorcomponent(props){
    return(
        <>
        <div className="error_parent_container">
        <div style={{"transform":`translateY(${props.yAxis})`,"transition":"linear,500ms"}} className="errorContainer">
        <div className="errorBox">
            <div className="errorDetails">Failed to Connect</div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Errorcomponent