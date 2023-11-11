import React, { useState, useEffect } from 'react'

function BotList() {
    const [bots, setBots] = useState([]);
    const [army, setArmy] = useState([]);

    useEffect(() => {
        async function fetchBots() {
            const response = await fetch("http://localhost:3000/bots")
            const bots = await response.json()
            setBots(bots)
        }
        fetchBots()
    }, [])
    const handleDelete = async (botsId) => {
      try {
        const response = await fetch(`http://localhost:3000/bots/${botsId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Remove the deleted bot from the state
        setBots(bots.filter(bots => bots.id !== botsId));
      } catch (error) {
        console.error('Error deleting bot:', error);
      }
    };
      const addToArmy = (bot) => {
        if (!army.some(b => b.id === bot.id)) {
          setArmy([...army, bot]);
        }
      };
    
      const removeFromArmy = (bot) => {
        const updatedArmy = army.filter(b => b.id !== bot.id);
        setArmy(updatedArmy);
      };
      return (
        <div>
          <div className="army-container">
            <h2>Your Bot Army</h2>
            <div className="selected-bots">
              {army.map((bot, index) => (
                <div key={index} className="army-bot">
                  <img src={bot.avatar_url} alt={`Bot ${index}`} />
                  <p>Name: {bot.name}</p>
                  <p>Health: {bot.health}</p>
                  <p>Damage: {bot.damage}</p>
                  <p>Armor: {bot.armor}</p>
                  <button className='button' onClick={() => removeFromArmy(bot)}>Remove from Army</button>
                </div>
              ))}
            </div>
          </div>
    
          <div className="bot-list-container">
            {bots.map((bot, index) => (
              <div key={index} className="bot-item">
                <img src={bot.avatar_url} alt={`Bot ${index}`} />
                <p>Name: {bot.name}</p>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <p>Bot_Class: {bot.bot_class}</p>
                <p>Phrase: {bot.catchphrase}</p>
                <p>Created_at: {bot.created_at}</p>
                <p>Updated_at: {bot.updated_at}</p>
                <button className='btn' onClick={() => handleDelete(bot.id)}>X</button>
                <button className='button'  onClick={() => {handleDelete(bot.id);addToArmy(bot);}}>Add to Army</button>
              </div>
            ))}
          </div>
        </div>
      );
}

export default BotList