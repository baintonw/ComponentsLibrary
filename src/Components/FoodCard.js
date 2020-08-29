import React from 'react'

//Styles
import './foodcard.scss'

const FoodCard = () => {
    return (
        <div className="container">
            <div className="foodCard expand">
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
                <button className="foodCard__button">Expand</button>
            </div>
        </div>
    )
}

export default FoodCard