import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, color }) {

  const headerStyle = {
    backgroundColor: bgColor,
    color: color
  }
  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI'
}

Header.prototype = {
  text: PropTypes.string,
  bgColor: 'rgb(0,0,0,0.4',
  color: 'grey'
}

export default Header
