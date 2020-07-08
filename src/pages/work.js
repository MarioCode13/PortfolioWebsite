import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { Link } from 'gatsby'

import Webapp from '../components/Slideshows/Webapp'
import Recipe from '../components/Slideshows/Recipe'
import Burger from '../components/Slideshows/Burger'
import ToDo from '../components/Slideshows/ToDo'
import Websites from '../components/Slideshows/Websites'
import Reaction from '../components/Slideshows/Reaction'
import Hangman from '../components/Slideshows/Hangman'

import reactlogo from '../images/logos/react.png'
import html from '../images/logos/html.png'
import css from '../images/logos/css.png'
import js from '../images/logos/js.png'
import firebase from '../images/logos/firebase.png'
import php from '../images/logos/php.png'
import mysql from '../images/logos/mysql.png'
import ajax from '../images/logos/ajax.png'
import python from '../images/logos/python.png'
import django from '../images/logos/django.png'
import tkinter from '../images/logos/tkinter.png'
import wordpress from '../images/logos/wordpress.png'
import gatsby from '../images/logos/gatsby.png'
import jquery from '../images/logos/jquery.png'
import bootstrap from '../images/logos/bootstrap.png'

const Work = () => (
  <Layout>
    <div>
      <Link to="/">
        <div id="home-button" className="fa fa-home"></div>
      </Link>
    </div>
    <div class="work-text">
      <h1>Work</h1>

      <h2>React.js</h2>
      <div>
        <h3>Recipe App</h3>
        <p id="p1">
          This app uses an api to call a number of recipes determined by the
          ingredient you input in the search field. It returns the meals
          including an image, ingredients, calories and a link to the recipe.
        </p>

        <span id="build-span">
          <p class="built">Built with: </p>
          <div class="tooltip">
            <img src={reactlogo} class="logo" />
            <span class="tooltiptext">React.js</span>
          </div>
          <div class="tooltip">
            <img src={html} class="logo-sm" />
            <span class="tooltiptext">HTML5</span>
          </div>
          <div class="tooltip">
            <img src={css} class="logo-sm" />
            <span class="tooltiptext">CSS3</span>
          </div>
          <div class="tooltip">
            <img src={js} class="logo-sm" />
            <span class="tooltiptext">JavaScript</span>
          </div>
        </span>

        <div id="demo-wrap">
          <a href="https://eloquent-nobel-425cb9.netlify.app/" target="blank">
            <button id="demo-button">Demo</button>
          </a>
        </div>

        <div>
          <Recipe />
        </div>

        <br />

        <h3>Burger App</h3>
        <p id="p1">
          This app has the functionality to create your own burger with dynamic
          prices. You can then order it. Complete with authentication and user
          profiles. Integrated with a Firebase database to store customers and
          orders placed.
        </p>
        <span id="build-span">
          <p class="built">Built with: </p>
          <div class="tooltip">
            <img src={reactlogo} class="logo" />
            <span class="tooltiptext">React.js</span>
          </div>
          <div class="tooltip">
            <img src={html} class="logo-sm" />
            <span class="tooltiptext">HTML5</span>
          </div>
          <div class="tooltip">
            <img src={css} class="logo-sm" />
            <span class="tooltiptext">CSS3</span>
          </div>
          <div class="tooltip">
            <img src={js} class="logo-sm" />
            <span class="tooltiptext">JavaScript</span>
          </div>
          <div class="tooltip">
            <img src={firebase} class="logo-sm" />
            <span class="tooltiptext">Firebase</span>
          </div>
        </span>

        <div>
          <Burger />
        </div>

        <br />
      </div>

      <h2>JavaScript</h2>
      <div>
        <h3>Hangman Game</h3>
        <p id="p1">
          A simple game of hangman, connected to an API for random single-word
          generation.
        </p>
        <span id="build-span">
          <p class="built">Built with: </p>
          <div class="tooltip">
            <img src={html} class="logo-sm" />
            <span class="tooltiptext">React.js</span>
          </div>
          <div class="tooltip">
            <img src={css} class="logo-sm" />
            <span class="tooltiptext">CSS3</span>
          </div>
          <div class="tooltip">
            <img src={js} class="logo-sm" />
            <span class="tooltiptext">JavaScript</span>
          </div>
        </span>
        <div id="demo-wrap">
          <a
            href="https://nostalgic-perlman-e77f49.netlify.app/"
            target="blank"
          >
            <button id="demo-button">Demo</button>
          </a>
        </div>
        <div class="slider">
          <Hangman />
        </div>
        <br />
      </div>

      <h2>PHP</h2>
      <div>
        <h3>Employee and Customer Management Web App</h3>
        <p id="p1">
          Integrated with a MySQL database, this app displays information on
          employees and customers and have user profiles incorporated, with
          different users having different rights. A report section shows more
          secure information on clients, only accessible to admins. Built using
          HTML, CSS, JavaScript, jQuery, Ajax, PHP and MySQL.
        </p>
        <span id="build-span">
          <p class="built">Built with: </p>
          <div class="tooltip">
            <img src={html} class="logo-sm" />
            <span class="tooltiptext">React.js</span>
          </div>
          <div class="tooltip">
            <img src={css} class="logo-sm" />
            <span class="tooltiptext">CSS3</span>
          </div>
          <div class="tooltip">
            <img src={js} class="logo-sm" />
            <span class="tooltiptext">JavaScript</span>
          </div>
          <div class="tooltip">
            <img src={php} class="logo-vert" />
            <span class="tooltiptext">PHP</span>
          </div>
          <div class="tooltip">
            <img src={mysql} class="logo-vert" />
            <span class="tooltiptext">MySQL</span>
          </div>
          <div class="tooltip">
            <img src={ajax} class="logo-bg" />
            <span class="tooltiptext">Ajax</span>
          </div>
          <div class="tooltip">
            <img src={jquery} class="logo" />
            <span class="tooltiptext">jQuery</span>
          </div>
          <div class="tooltip">
            <img src={bootstrap} class="logo" />
            <span class="tooltiptext">Bootstrap</span>
          </div>
        </span>
        <div class="slider">
          <Webapp />
        </div>
        <br />
      </div>

      <h2>Websites</h2>
      <div>
        <p id="p1">
          Basic freelance websites built with WordPress or Gatsby.js
        </p>
        <span id="build-span">
          <p class="built">Built with: </p>
          <div class="tooltip">
            <img src={html} class="logo-sm" />
            <span class="tooltiptext">HTML5</span>
          </div>
          <div class="tooltip">
            <img src={css} class="logo-sm" />
            <span class="tooltiptext">CSS3</span>
          </div>
          <div class="tooltip">
            <img src={wordpress} class="logo" />
            <span class="tooltiptext">WordPress</span>
          </div>
          <div class="tooltip">
            <img src={gatsby} class="logo" />
            <span class="tooltiptext">Gatsby.js</span>
          </div>
        </span>
        <div class="clear">
          <ul>
            <li>
              <a href="https://ozramedia.co.za/" class="link">
                ozramedia.co.za
              </a>
              <p> (business offerings and info site) </p>
            </li>
            <li>
              <a href="https://drjaninebrandt.com/" class="link">
                drjaninebrandt.com
              </a>
              <p> (esports and health blog) </p>
            </li>

            <li>
              <a href="https://dollaretta.com/" class="link">
                dollaretta.com
              </a>
              <p>(comic book ecommerce site)</p>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="https://flourishnetwork.org.za/" class="link">
                flourishnetwork.org.za
              </a>
              <p> (mother and baby support) </p>
            </li>
          </ul>
        </div>

        <div class="slider">
          <Websites />
        </div>
        <br />
      </div>

      <h2>Python</h2>
      <h3>To Do List</h3>
      <p id="p1">
        Built with Python and the Django framework, this app allows you to add
        and delete tasks, with some JQuery functionality.
      </p>
      <span id="build-span">
        <p class="built">Built with: </p>
        <div class="tooltip">
          <img src={python} class="logo" />
          <span class="tooltiptext">Python</span>
        </div>
        <div class="tooltip">
          <img src={django} class="logo-sm" />
          <span class="tooltiptext">Django</span>
        </div>
        <div class="tooltip">
          <img src={html} class="logo-sm" />
          <span class="tooltiptext">HTML5</span>
        </div>
        <div class="tooltip">
          <img src={css} class="logo-sm" />
          <span class="tooltiptext">CSS3</span>
        </div>
        <div class="tooltip">
          <img src={jquery} class="logo" />
          <span class="tooltiptext">jQuery</span>
        </div>
      </span>
      <div class="slider">
        <ToDo />
      </div>
      <br />

      <h3>Reaction Time Test</h3>
      <p id="p1">
        This app uses Python's TKinter graphical UI to randomise a timer and
        tracks how long it takes for you to hit the "go" button after the
        prompt.
      </p>
      <span id="build-span">
        <p class="built">Built with: </p>
        <div class="tooltip">
          <img src={python} class="logo" />
          <span class="tooltiptext">Python</span>
        </div>
        <div class="tooltip">
          <img src={tkinter} class="logo-bg" />
          <span class="tooltiptext">TKinter</span>
        </div>
      </span>
      <div class="slider">
        <Reaction />
      </div>
      <br />
      <a href="#top" className="fa fa-chevron-circle-up" id="back-top" />
    </div>
  </Layout>
)
export default Work
