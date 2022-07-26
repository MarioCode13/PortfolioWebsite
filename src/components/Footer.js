import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <div>
      <a className="logo" href="https://github.com/MarioCode13" target="_blank">
        <span className="social icon fa fa-github"></span>
      </a>
      <a
        className="logo"
        href="https://www.linkedin.com/in/mario-liebenberg/"
        target="_blank"
      >
        <span className="social fa fa-linkedin-square"></span>
      </a>
    </div>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
