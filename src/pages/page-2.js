import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const SecondPage = () => (
  <Layout>
    <div id="nav-arrow">
      <Link to="/"><span className="fa fa-arrow-circle-o-left"></span></Link>
    </div>      
    <p>Welcome to page 2</p>

  </Layout>
)

export default SecondPage
