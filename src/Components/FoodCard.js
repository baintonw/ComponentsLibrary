import React, { useState } from 'react'

//Styles
import './foodcard.scss'



//toggle card expand
const expand = (e) => {
    e.preventDefault();
    console.log('expanding...', e.currentTarget)
}

const FoodCard = () => {
    //State handlers
    //state value - handling function - useState setting initial state 
    const [count, setCount] = useState(0)
    const [expanded, toggleExpand] = useState(false)
    return (
        <div className="container">
            <div className={"foodCard" + (expanded ? " expand" : '')}>
                <img className="foodCard__image" src="https://picsum.photos/200"></img>
                <div className="foodCard__info-box">
                    <p className="foodCard__name">Bananas <span>#5</span></p>
                    <p className="foodCard__who">Who</p>
                    <p className="foodCard__what">What</p>
                    <p className="foodCard__location">Location</p>
                </div>
                <div className="foodCard__description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus urna, faucibus nec placerat ac, semper eget leo. Cras sem massa, molestie vitae iaculis vitae, rutrum euismod leo. Vivamus faucibus libero arcu, feugiat porttitor mi luctus eget. Phasellus gravida posuere metus et euismod. Donec semper luctus tortor, eget lacinia sem.
                    </p>
                </div>
                <button onClick={(e) => toggleExpand(!expanded)} className="foodCard__button">Expand</button>
            </div>
        </div>
    )
}

export default FoodCard