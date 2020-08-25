import React from 'react'

//Styles
import './foodcard.scss'

const FoodCard = () => {
    return (
        <div className="container">
            <div className="foodCard">
                <img src="https://picsum.photos/300"></img>
                <h2 className="foodCard__name">Bananas</h2>
                <p className="foodCard__quantity">#5</p>
                <p className="foodCard__who">Who</p>
                <p className="foodCard__what">What</p>
                <p className="foodCard__location">Location</p>
                <p className="foodCard__description">Description</p>
            </div>
        </div>
    )
}

export default FoodCard