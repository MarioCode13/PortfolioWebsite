import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { Link } from 'gatsby'

import SlideShow from '../components/slideshow'
import Webapp from '../components/Slideshows/Webapp'
import Recipe from '../components/Slideshows/Recipe'
import Burger from '../components/Slideshows/Burger'
import ToDo from '../components/Slideshows/ToDo'
import Websites from '../components/Slideshows/Websites'
import Reaction from '../components/Slideshows/Reaction'

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
          <img src={reactlogo} class="logo" />
          <img src={html} class="logo-sm" />
          <img src={css} class="logo-sm" />
          <img src={js} class="logo-sm" />
        </span>
        <div>
          <Recipe />
        </div>

        <br />

        <h3>Burger App</h3>
        <p id="p1">
          This app has the functionality to create your own burger with dynamic
          prices. You can then order it. Complete with authentication and user
          profiles.
        </p>
        <span id="build-span">
          <p class="built">Built with: </p>
          <img src={reactlogo} class="logo" />
          <img src={html} class="logo-sm" />
          <img src={css} class="logo-sm" />
          <img src={js} class="logo-sm" />
          <img src={firebase} class="logo-sm" />
        </span>

        <div>
          <Burger />
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
          <img src={html} class="logo-sm" />
          <img src={css} class="logo-sm" />
          <img src={js} class="logo-sm" />
          <img src={php} class="logo-vert" />
          <img src={mysql} class="logo-vert" />
          <img src={ajax} class="logo-bg" />
          <img src={jquery} class="logo" />
          <img src={bootstrap} class="logo" />
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
          <img src={html} class="logo-sm" />
          <img src={css} class="logo-sm" />
          <img src={wordpress} class="logo" />
          <img src={gatsby} class="logo" />
        </span>
        <div class="clear">
          <ul>
            <li>
              <a href="https://drjaninebrandt.com/" class="link">
                drjaninebrandt.com
              </a>
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
        <img src={python} class="logo" />
        <img src={django} class="logo-sm" />
        <img src={html} class="logo-sm" />
        <img src={css} class="logo-sm" />
        <img src={jquery} class="logo" />
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
        <img src={python} class="logo-bg" />
        <img src={tkinter} class="logo-bg" />
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
