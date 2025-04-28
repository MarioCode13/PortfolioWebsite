import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { Link } from 'gatsby'

import Webapp from '../components/Slideshows/Webapp'
import Recipe from '../components/Slideshows/Recipe'
import Dashboard from '../components/Slideshows/Dashboard'
import Movie from '../components/Slideshows/Movie'
import Burger from '../components/Slideshows/Burger'
import ToDo from '../components/Slideshows/ToDo'
import Websites from '../components/Slideshows/Websites'
import Reaction from '../components/Slideshows/Reaction'
import Hangman from '../components/Slideshows/Hangman'
import Metsi from '../components/Slideshows/Metsi'
import Housemac from '../components/Slideshows/Housemac'
import ING from '../components/Slideshows/ING'
import Ecommerce from '../components/Slideshows/Ecommerce'
import Insta from '../components/Slideshows/Insta'
import Avo from '../components/Slideshows/Avo'
import Pirelli from '../components/Slideshows/Pirelli'

import reactlogo from '../images/logos/react.png'
import html from '../images/logos/html.png'
import css from '../images/logos/css.png'
import js from '../images/logos/js.png'
import tailwind from '../images/logos/tailwind.png'
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
import umbraco from '../images/logos/umbraco.png'
import threejs from '../images/logos/3js.png'
import springboot from '../images/logos/springboot.svg'
import postgres from '../images/logos/postgres.svg'
import java from '../images/logos/java.png'
import blender from '../images/logos/blender.png'
import reactNative from '../images/logos/native.svg'
import gsap from '../images/logos/gsap.png'
import gql from '../images/logos/gql.png'
import antd from '../images/logos/antd.png'
import typescript from '../images/logos/typescript.png'
import sass from '../images/logos/sass.png'
import redux from '../images/logos/redux.png'
import sanity from '../images/logos/sanity.png'
import stripe from '../images/logos/stripe.png'
import next from '../images/logos/next.png'
import syncfusion from '../images/logos/syncfusion.webp'
import formik from '../images/logos/formik.png'
import mongo from '../images/logos/mongo.png'
import express from '../images/logos/express.png'
import node from '../images/logos/node.png'
import mui from '../images/logos/mui.png'
import ScrollTop from '../components/ScrollTop'

const Work = () => (
  <Layout>
    <div className="work-wrapper">
      <div>
        <Link to="/">
          <div id="home-button" className="fa fa-home"></div>
        </Link>
      </div>
      <div class="work-text">
        <h1>Work</h1>

        <h2>React.js</h2>

        <div>
          <h3>Housemac</h3>
          <p id="p1">
            A dynamic platform that lets users visualize and customize their
            future homes by exploring architectural designs on plots of land.
            Built using Blender and Three.js, the interactive 3D environment
            allows for real-time layout configuration, bridging the gap between
            architecture and home design. The project delivered a seamless,
            engaging experience for users to bring their dream homes to life.
          </p>

          <div id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={reactlogo} class="logo-sm" />
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <img src={typescript} class="logo-sm" />
              <span class="tooltiptext">Typescript</span>
            </div>
            <div class="tooltip">
              <img src={mui} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Material UI
              </span>
            </div>
            <div class="tooltip">
              <img
                src={threejs}
                class="logo-sm"
                style={{ filter: 'invert(100%)' }}
              />
              <span class="tooltiptext" style={{ width: '150px' }}>
                React 3 Fibre
              </span>
            </div>
            <div class="tooltip">
              <img src={blender} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Blender
              </span>
            </div>
            <div class="tooltip">
              <img src={gql} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                GraphQl
              </span>
            </div>
            <div class="tooltip">
              <img src={java} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Java
              </span>
            </div>

            <div class="tooltip">
              <img src={springboot} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Spring Boot
              </span>
            </div>
            <div class="tooltip">
              <img src={postgres} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Postgres
              </span>
            </div>
          </div>

          <div id="demo-wrap">
            <a
              href="https://public.housemac.ssquared.cloud/"
              target="blank"
              style={{ marginRight: 8 }}
            >
              <button id="demo-button">Demo</button>
            </a>
            <a
              href="https://public.housemac.ssquared.cloud/configure?id=RGVzaWduOjQ"
              target="blank"
            >
              <button id="demo-button">3D Demo</button>
            </a>
          </div>

          <div>
            <Housemac />
          </div>

          <br />

          <h3>Avo Auto</h3>
          <p id="p1">
            A car sales platform seamlessly integrated with bank financing
            options, enabling users to browse and purchase vehicles with
            real-time financing calculations. The site streamlines the buying
            process, offering an intuitive user interface for car selection,
            financing approval, and payment. Built with a focus on user
            experience, the platform provides a smooth, end-to-end solution,
            allowing customers to make informed purchasing decisions while
            easily managing their financing options.
          </p>

          <div id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={reactlogo} class="logo-sm" />
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <img src={typescript} class="logo-sm" />
              <span class="tooltiptext">Typescript</span>
            </div>
            <div class="tooltip">
              <img src={mui} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Material UI
              </span>
            </div>

            <div class="tooltip">
              <img src={gql} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                GraphQl
              </span>
            </div>
            <div class="tooltip">
              <img src={java} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Java
              </span>
            </div>

            <div class="tooltip">
              <img src={springboot} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Spring Boot
              </span>
            </div>
            <div class="tooltip">
              <img src={postgres} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Postgres
              </span>
            </div>
          </div>

          <div id="demo-wrap">
            <a href="https://public.housemac.ssquared.cloud/" target="blank">
              <button id="demo-button">Demo</button>
            </a>
          </div>

          <div>
            <Avo />
          </div>

          <br />

          <h3>Pirelli Stock Tracker</h3>
          <p id="p1">
            A mobile application built with React Native for Pirelli employees
            to track tire stock and pricing across different locations.
            Available on both iOS and Android, the app allows staff to quickly
            check real-time inventory and prices specific to their branch.
            Designed for ease of use, it helps improve efficiency in stock
            management, enabling employees to respond faster to customer needs
            and optimize inventory workflows.
          </p>

          <div id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={reactNative} class="logo-sm" />
              <span class="tooltiptext">React Native</span>
            </div>
            <div class="tooltip">
              <img src={typescript} class="logo-sm" />
              <span class="tooltiptext">Typescript</span>
            </div>

            <div class="tooltip">
              <img src={gql} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                GraphQl
              </span>
            </div>
            <div class="tooltip">
              <img src={java} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Java
              </span>
            </div>

            <div class="tooltip">
              <img src={springboot} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Spring Boot
              </span>
            </div>
            <div class="tooltip">
              <img src={postgres} class="logo-sm" />
              <span class="tooltiptext" style={{ width: '150px' }}>
                Postgres
              </span>
            </div>
          </div>

          <div id="demo-wrap">
            <a
              href="https://public.housemac.ssquared.cloud/"
              target="blank"
              style={{ marginRight: 8 }}
            >
              <button id="demo-button">Play Store</button>
            </a>
            <a href="https://public.housemac.ssquared.cloud/" target="blank">
              <button id="demo-button">iStore</button>
            </a>
          </div>

          <div>
            <Pirelli />
          </div>

          <br />

          <h3>Metsi</h3>
          <p id="p1">
            A static site built with Gatsby for a cloud computing company,
            showcasing their services and blogs. A 3D journey was implemented
            with Three.js to show their application modernisation process. A
            unique feel was required so many custom components were needed
            opposed to using component libraries. Gsap was also used to
            implement some animations to add some flair.
          </p>

          <div id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={reactlogo} class="logo-sm" />
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <img src={gatsby} class="logo-sm" style={{ margin: '0px 8px' }} />
              <span class="tooltiptext">Gatsby</span>
            </div>
            <div class="tooltip">
              <img src={sass} class="logo-md" />
              <span class="tooltiptext">Sass</span>
            </div>
            <div class="tooltip">
              <img src={js} class="logo-md" />
              <span class="tooltiptext">JavaScript</span>
            </div>
            <div class="tooltip">
              <img src={gsap} class="logo-sm" />
              <span class="tooltiptext">Gsap</span>
            </div>
            <div class="tooltip">
              <img
                src={threejs}
                class="logo-sm"
                style={{ filter: 'invert(100%)' }}
              />
              <span class="tooltiptext">Three JS</span>
            </div>
          </div>

          <div id="demo-wrap">
            <a href="https://metsi.co/" target="blank">
              <button id="demo-button">Demo</button>
            </a>
          </div>

          <div>
            <Metsi />
          </div>

          <br />

          <h3>Multichoice African Movie Showcase</h3>
          <p id="p1">
            A project for Multichoice to showcase African movies with filters
            for their respective countries and awards. Hooked up to Umbraco CMS
            to retrieve data.
          </p>

          <div id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={reactlogo} class="logo-sm" />
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <img src={html} class="logo-md" />
              <span class="tooltiptext">HTML</span>
            </div>
            <div class="tooltip">
              <img src={css} class="logo-md" />
              <span class="tooltiptext">CSS</span>
            </div>
            <div class="tooltip">
              <img src={js} class="logo-md" />
              <span class="tooltiptext">JavaScript</span>
            </div>
            <div class="tooltip">
              <img src={bootstrap} class="logo-sm" />
              <span class="tooltiptext">Bootstrap</span>
            </div>
            <div class="tooltip">
              <img src={umbraco} class="logo-sm" />
              <span class="tooltiptext">Umbraco</span>
            </div>
          </div>

          <div id="demo-wrap">
            <a
              href="https://multichoice.com/expressing-africa-2022"
              target="blank"
            >
              <button id="demo-button">Demo</button>
            </a>
          </div>

          <div>
            <Movie />
          </div>

          <br />

          <h3>Banking Utility App</h3>
          <p id="p1">
            A project to create requests for currency exchanges and for the bank
            to track them and generate pdf reports. Integrated with login
            systems and localisation, allowing language to be changed.
          </p>

          <div id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={reactlogo} class="logo-sm" />
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <img
                src={typescript}
                class="logo-sm"
                style={{ margin: '0px 8px' }}
              />
              <span class="tooltiptext">Typescript</span>
            </div>
            <div class="tooltip">
              <img src={redux} class="logo-md" style={{ margin: '0px 8px' }} />
              <span class="tooltiptext">Redux</span>
            </div>
            <div class="tooltip">
              <img src={css} class="logo-md" />
              <span class="tooltiptext">CSS</span>
            </div>

            <div class="tooltip">
              <img src={antd} class="logo-sm" />
              <span class="tooltiptext">Ant Design</span>
            </div>
          </div>
          <div>
            <ING />
          </div>
          <br />

          <h3>Ecommerce Record Store</h3>
          <p id="p1">
            An ecommerce site built with Next js, integrated with Stripe for
            payments and using Sanity studio to edit store products.
          </p>

          <span id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={reactlogo} class="logo-sm" />
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <img src={next} class="logo-md" />
              <span class="tooltiptext">Next.js</span>
            </div>
            <div class="tooltip">
              <img src={tailwind} class="logo-md" />
              <span class="tooltiptext">Tailwind</span>
            </div>
            <div class="tooltip">
              <img src={sanity} class="logo-sm" />
              <span class="tooltiptext">Sanity</span>
            </div>
            <div class="tooltip">
              <img src={stripe} class="logo-sm" />
              <span class="tooltiptext">Stripe</span>
            </div>
          </span>

          <div id="demo-wrap">
            <a href="https://lustrous-malabi-1f3556.netlify.app" target="blank">
              <button id="demo-button">Demo</button>
            </a>
          </div>

          <div>
            <Ecommerce />
          </div>

          <br />

          <h3>Instagram Clone</h3>
          <p id="p1">
            An instagram-type clone where a user can log in, make posts and like
            other users' posts integrated with Google authentication and a
            MongoDB database for user and post storage.
          </p>

          <span id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={reactlogo} class="logo-sm" />
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <img src={redux} class="logo-md" />
              <span class="tooltiptext">Redux</span>
            </div>
            <div class="tooltip">
              <img
                src={express}
                class="logo-xl"
                style={{ filter: 'brightness(200%)' }}
              />
              <span class="tooltiptext">Express</span>
            </div>
            <div class="tooltip">
              <img
                src={node}
                class="logo-xl"
                style={{ filter: 'brightness(130%)' }}
              />
              <span class="tooltiptext">Node</span>
            </div>
            <div class="tooltip">
              <img src={mongo} class="logo-md" />
              <span class="tooltiptext">Mongo DB</span>
            </div>
            <div class="tooltip">
              <img src={mui} class="logo-md" />
              <span class="tooltiptext">Material UI</span>
            </div>
          </span>

          <div>
            <Insta />
          </div>

          <br />

          <h3>Dashboard App</h3>
          <p id="p1">
            Experimenting with typical dashboard elements and creating multiple
            smaller apps and views within the dashboard. I'm using Syncfusion to
            assist with graphs, calendar and Kanban board components and styling
            is done with Tailwind CSS.
          </p>

          <span id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={reactlogo} class="logo-sm" />
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <img src={tailwind} class="logo-sm" />
              <span class="tooltiptext">Tailwind</span>
            </div>
            <div class="tooltip">
              <img src={syncfusion} class="logo-md" />
              <span class="tooltiptext">Syncfusion</span>
            </div>
          </span>

          <div id="demo-wrap">
            <a
              href="https://ornate-salamander-2cbf37.netlify.app/"
              target="blank"
            >
              <button id="demo-button">Demo</button>
            </a>
          </div>

          <div>
            <Dashboard />
          </div>

          <br />
          <h3>Recipe App</h3>
          <p id="p1">
            This app uses an api to call a number of recipes determined by the
            ingredient you input in the search field. It returns the meals
            including an image, ingredients, calories and a link to the recipe.
          </p>

          <span id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={reactlogo} class="logo-sm" />
              <span class="tooltiptext">React.js</span>
            </div>
            <div class="tooltip">
              <img src={css} class="logo-md" />
              <span class="tooltiptext">CSS</span>
            </div>
            <div class="tooltip">
              <img src={js} class="logo-md" />
              <span class="tooltiptext">JavaScript</span>
            </div>
          </span>

          <div>
            <Recipe />
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
            secure information on clients, only accessible to admins. Built
            using HTML, CSS, JavaScript, jQuery, Ajax, PHP and MySQL.
          </p>
          <span id="build-span">
            <p class="built">Built with: </p>
            <div class="tooltip">
              <img src={html} class="logo-sm" />
              <span class="tooltiptext">HTML</span>
            </div>
            <div class="tooltip">
              <img src={css} class="logo-sm" />
              <span class="tooltiptext">CSS</span>
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
              <img src={ajax} class="logo-xs" />
              <span class="tooltiptext">Ajax</span>
            </div>
            <div class="tooltip">
              <img src={jquery} class="logo-sm" />
              <span class="tooltiptext">jQuery</span>
            </div>
            <div class="tooltip">
              <img src={bootstrap} class="logo-sm" />
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
              <span class="tooltiptext">HTML</span>
            </div>
            <div class="tooltip">
              <img src={css} class="logo-sm" />
              <span class="tooltiptext">CSS</span>
            </div>
            <div class="tooltip">
              <img src={wordpress} class="logo-sm" />
              <span class="tooltiptext">WordPress</span>
            </div>
            <div class="tooltip">
              <img src={next} class="logo-sm" />
              <span class="tooltiptext">Next.js</span>
            </div>
          </span>
          <div class="clear">
            <ul>
              <li>
                <a
                  href="https://connectedconservation.foundation/"
                  class="link"
                >
                  connectedconservation.foundation
                </a>
                <p>wildlife preservation</p>
              </li>
              <li>
                <a href="https://flourishnetwork.org.za/" class="link">
                  flourishnetwork.org.za
                </a>
                <p>mother and baby support</p>
              </li>
              <li>
                <a href="https://dollaretta.netlify.app/" class="link">
                  dollaretta.com
                </a>
                <p>
                  comic book ecommerce site (Rebuild from WP to Next in
                  progress)
                </p>
              </li>
            </ul>
          </div>

          <div class="slider">
            <Websites />
          </div>
          <br />
        </div>
      </div>
    </div>
    <ScrollTop />
  </Layout>
)
export default Work
