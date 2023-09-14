import React from "react"
import data from "../data"

export default function Cards(props){
    let badgeText
    if(props.openSpots===0){
        badgeText = 'SOLD OUT'
    }
    else if(props.location==='Online'){
        badgeText ="ONLINE"
    }


    return(
        <div className="cards">

            { badgeText && <div className="card--badgeText">{badgeText}</div>}

            <img src={`../images/${props.coverImg}`} className="card--imag"/>

            <div className="cards--stats">

                <img src={require('../images/star.png')} className="card--starImg"/>
                <span>{` ${props.stats.rating}`}</span>
                <span>{` ( ${props.stats.reviewCount})`}</span>
                <span>{` ${props.location} `}</span>
                <hr></hr>
                <span className="cards--remainingItems">{` Remaining Items: ${props.openSpots}`}</span>
                
            </div>
            <span className="cards--description">{props.description}</span>
            <p className="cards--photograpger">{` Photographer: ${props.title}`}</p>
            <p className="cards--price">${props.price}</p>
        </div>
    )
}