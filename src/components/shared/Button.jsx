import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, btnDisabled, version, type}) {
  return (
    <button type={type} disabled={btnDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  btnDisabled: false,
  type: 'button'
}

Button.propTypes = {
  version: PropTypes.string,
  btnDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.string
}

export default Button
