import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SlideShow from '../components/slideshow'
import Webapp from '../components/Slideshows/Webapp'
import Recipe from '../components/Slideshows/Recipe'
import Burger from '../components/Slideshows/Burger'
import Pic from '../images/recipe/1.png'

const Work = () => (
  <Layout>
    <div>
      <Link to="/">
        <div id="home-button" className="fa fa-home"></div>
      </Link>
    </div>

    <h1>Work</h1>

    <h2>React.js</h2>
    <div>
      <h3>Recipe App</h3>
      <p>
        This app uses an api to call a number of recipes determined by the
        ingredient you input in the search field. It returns the meals including
        an image, ingredients, calories and a link to the recipe.
      </p>
      <div>
        <Recipe />
      </div>

      <br />

      <h3>Burger App</h3>
      <p>
        This app has the functionality to create your own burger with dynamic
        prices. You can then order it. Complete with authentication and user
        profiles.
      </p>
      <div class="project">
        <div class="slider">
          <Burger />
        </div>
      </div>

      <br />
    </div>

    <h2>PHP</h2>
    <h3>Employee and Customer Management Web App</h3>
    <p>
      Integrated with a MySQL database, this app displays information on
      employees and customers and have user profiles incorporated, with
      different users having different rights. A report section shows more
      secure information on clients, only accessible to admins. Built using
      HTML, CSS, JavaScript, jQuery, Ajax, PHP and MySQL.
    </p>
    <div class="slider">
      <Webapp />
    </div>
    <br />

    <h2>Websites</h2>
    <p>oajaljafladaflk dksddk sdpsdipi sdspsdpo sdsdpsdsdifs psddij sdjk</p>
    <div class="slider">
      <SlideShow />
    </div>
    <br />

    <h2>Python</h2>
    <h3>To Do List</h3>
    <p>oajaljafladaflk dksddk sdpsdipi sdspsdpo sdsdpsdsdifs psddij sdjk</p>
    <div class="slider">
      <SlideShow />
    </div>
    <br />

    <h3>Reaction Time Test</h3>
    <p>oajaljafladaflk dksddk sdpsdipi sdspsdpo sdsdpsdsdifs psddij sdjk</p>
    <div class="slider">
      <SlideShow />
    </div>
    <br />

    <a href="#top" className="fa fa-chevron-circle-up" id="back-top" />
  </Layout>
)
export default Work
