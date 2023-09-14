import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cards from "./components/Cards";
import data from "./data";


export default function App(){
    const cards = data.map(item =>{
        return(
            <Cards
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div>
            <Navbar />
            <Main />
            <section className="cards--section">
                {cards}
            </section>
        </div>
    )
}