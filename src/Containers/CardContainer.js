import React from "react"

//Styles
import "./cardcontainer.scss"

const CardContainer = (props) => {
    return(
        <div className="card-container">
            {props.children}
        </div>
    )
}

export default CardContainer