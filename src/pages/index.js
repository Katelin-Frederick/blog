import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Katelin, a front end developer living in Michigan</h2>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default IndexPage