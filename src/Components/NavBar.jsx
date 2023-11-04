import React from 'react'

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "wheat",
};


function NavBar() {
  return (
    <div>
      <a href='home' style={linkStyles}>Bot Collection</a>
      <a href='home' style={linkStyles}>Your Bot Army</a>
    </div>
  )
}

export default NavBar