import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Main = (props) => {
  const close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Intro</h2>
        <span className="image main">
          <StaticImage
            formats={['auto', 'webp']}
            src="../images/intro.jpg"
            alt="About"
          />
        </span>
        <p>
          Hi, I'm Mario. I'm currently working as a frontend developer working
          on a car sales and financing system for car dealerships and banks.
          Primarily working with
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>GraphQL</li>
            <li>Formik</li>
            <li>MaterialUI</li>
            <li>Java</li>
          </ul>
          Have a look at some of my <a href="work">work</a>.
        </p>
        <p>
          I love creating things, and working on interesting projects. There's
          nothing quite like seeing the tangible end-product of what you've been
          working on, bringing the concepts in your head to life. When a project
          interests or challenges me, that's what I feel most excited about and
          when I do my best work.
        </p>
        <p>
          My ambition is to create great user experiences with exciting
          functionality, whether its websites, applications or even more modern
          mediums like VR and AR. That is why I've focused on being as well
          rounded as possible across a broad set of frameworks and languages: to
          ensure interoperability and the understanding to build on.
        </p>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <Link to="/work">
          <h2 className="major">Work</h2>
        </Link>
        <span className="image main">
          <StaticImage
            formats={['auto', 'webp']}
            src="../images/work.jpg"
            alt="About"
          />
        </span>
        <p>
          I spent the majority of my early career building websites and
          eventually getting more into the domain of web apps. I enjoy
          continuous learning and keeping up to date with trends and
          best-practices via experimentation through side projects.
        </p>

        <p>
          You can see a more detailed description of the projects I've worked on{' '}
          <a href="work">here</a>.
        </p>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <Link
          to="https://publiuslogic.com"
          rel="noopener noreferrer"
          target="_blank"
          area-label="PubliusLogic"
        >
          <h2 className="major">About</h2>
        </Link>
        <span className="image main">
          <StaticImage
            formats={['auto', 'webp']}
            src="../images/about2.jpg"
            alt="About"
          />
        </span>
        <p>
          I've been a musician for most of my life so I suppose the creative in
          me made me love frontend development, although I do enjoy backend as
          well. I've been dabbling in programming for about 5 years in which
          time I started pursuing it as a career. I got myself a Bachelor of
          Commerce degree from the University of South Africa with a double
          major in Information Systems and Business Management. I studied while
          working in marketing and helping a bit with the web development where
          I developed a passion. I'm currently working as a frontend developer
          building web-apps and internal administration systems.
        </p>
        <p>
          Find some of my work <a href="work">here</a>.
        </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="POST" name="contact" data-netlify="true">
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

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
