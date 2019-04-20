import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>I am currently looking for a web development position</p>
      <p>Want to work with me?<Link to="/contact">Reach Out</Link></p>
    </Layout>
  )
}

export default About