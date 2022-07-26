import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <Link to="/work" className="logo">
      <span className="icon fas fa-laptop"></span>
    </Link>
    <div className="content">
      <div className="inner">
        <h1>
          Hi, <br></br>I'm Mario
        </h1>
        <p>Developer</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
