import React from "react"

//Styles
import "./card.scss"

const Card = () => {
    return (
        <div className="card">
            <div className="card__image">
            </div>
            <div className="card__info">
                <div className="card__title">
                    Carrot
                </div>
                <div className="card__quantity">
                    5
                </div>
                
            </div>
            <div className="card__owner">
                    Jane Doe
            </div>
            <div className="card__description">
                    A carrot, bought three days ago.
            </div>
        </div>
    )
}

export default Card