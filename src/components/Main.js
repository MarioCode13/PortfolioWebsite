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
          Hi, I'm Mario. I'm a software developer building robust, user-focused
          digital solutions. I have experience developing a broad range of
          applications, from client-facing products to internal admin
          dashboards, with a focus on creating intuitive experiences and
          scalable architectures.{' '}
        </p>
        <p>
          Primarily working with:
          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>Typescript</li>
            <li>GraphQL</li>
            <li>Java (Spring Boot)</li>
            <li>Postgres</li>
          </ul>
        </p>
        <p>
          I’m passionate about bringing ideas to life — translating concepts
          into real, working products that provide value to users and businesses
          alike. I’m at my best when working on projects that challenge me to
          think critically, solve problems creatively, and deliver polished,
          maintainable solutions.
        </p>
        <p>
          My ambition is to continue crafting seamless digital experiences
          across web and mobile platforms, while deepening my expertise across
          the full stack to deliver end-to-end solutions.
        </p>
        Have a look at some of my <a href="work">work</a>.{close}
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
            alt="Work"
          />
        </span>
        <p>
          Over the course of my career, I’ve worked across a variety of
          web-based and mobile-based solutions — from building marketing
          websites to developing full-scale applications with complex user flows
          and backend integrations.
        </p>

        <p>
          I'm passionate about continuous learning, refining my craft, and
          exploring new technologies through hands-on projects. Experimentation,
          side projects, and staying current with best practices all play a big
          role in how I grow and approach new challenges.
        </p>

        <p>
          You can find a more detailed overview of the projects I've worked on{' '}
          <a href="/work">here</a>.
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
          aria-label="PubliusLogic"
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
          With a background in both creative and technical fields, I bring a
          well-rounded approach to software development. My passion for building
          intuitive user experiences is rooted in a lifelong love of creativity
          — shaped through music, and later expanded into design and technology.
        </p>

        <p>
          I hold a Bachelor of Commerce degree from the University of South
          Africa, with a double major in Information Systems and Business
          Management. While working in marketing and supporting web development
          initiatives, I discovered my passion for programming and shifted my
          career focus toward building digital solutions.
        </p>

        <p>
          Today, I work on a broad range of projects including web applications,
          client-facing products, and internal administration systems —
          leveraging both frontend and backend technologies to deliver complete
          solutions.
        </p>

        <p>
          You can explore some of my work <a href="/work">here</a>.
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
