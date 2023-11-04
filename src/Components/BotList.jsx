import React, { useState, useEffect } from 'react'

function BotList() {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        async function fetchBots() {
            const response = await fetch("http://localhost:3000/bots")
            const bots = await response.json()
            setBots(bots)
        }
        fetchBots()
    }, [])
    return (
        <div className="bot-list-container">
            {bots.map((bots, index) => {
                return (
                    <div key={index} className="bot-item">
                        <img src={bots.avatar_url} alt={`Bot ${index}`}/>
                        <p>Name:{bots.name}</p>
                        <p>Health:{bots.health}</p>
                        <p>Damage:{bots.damage}</p>
                        <p>Armor:{bots.armor}</p>
                        <p>Bot_Class:{bots.bot_class}</p>
                        <p>Phrase:{bots.catchphrase}</p>
                        <p>Created_at:{bots.created_at}</p>
                        <p>Updated_at:{bots.updated_at}</p>
                        <button className='btn'>X</button> 
                        <button className='button'>Add to Army</button>
                    </div>
                    )
            })}
        </div>
    )
}

export default BotList