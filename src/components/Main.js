import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/intro.jpg'
import pic02 from '../images/work.jpg'
import pic03 from '../images/about2.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hi, I'm Mario. I'm a full-stack developer, currently working as a
            React developer mainly doing bug fixes and added functionality. I
            primarily work with
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>PHP</li>
              <li>Python</li>
              <li>React</li>
              <li>SQL</li>
            </ul>
            but I'm always willing to learn new technologies. Feel free to check
            out some of my <a href="work">work</a>.
          </p>

          <p>
            I love creating things, and working on interesting projects. There's
            nothing quite like seeing the tangible end-product of what you've
            been working on, bringing the concepts in your head to life. When a
            project interests or challenges me, that's what I feel most excited
            about and when I do my best work.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I have a lot of SQL scripting experience, have worked on a number of
            websites, have built a few webapps and I often do little
            experimental side projects to keep me up to date, learn new
            languages and to challenge myself.
          </p>
          <p>
            You can see a more detailed description of the projects I've worked
            on <a href="work">here</a>.
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I've been a musician for most of my life so I suppose the creative
            in me made me love frontend development, although I do enjoy backend
            as well. I've been dabbling in programming for about 4 years in
            which time I started pursuing it as a career. I got myself a
            Bachelor of Commerce degree from the University of South Africa with
            a major in Information Systems and in Business Management and I
            started working on my own projects. I did this while working in
            marketing and helping with the web development. I'm currently
            working as a React developer primarily doing testing, bug-fixes and
            implementing some new functionality.
          </p>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" name="contact" data-netlify="true">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <div>
              <label htmlFor="gotcha"></label>
              <input id="gotcha" type="text" name="_gotcha" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/MarioCode13"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mario-liebenberg/"
                target="_blank"
                className="icon fa-linkedin-square"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
