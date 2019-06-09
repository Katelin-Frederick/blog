import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import Bio from '../components/Bio'
import indexStyles from './index.module.scss'

const Index = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <Bio />
      <h1>Posts</h1>
      <ol className={indexStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          const { node } = edge

          return (
            <li key={index} className={indexStyles.post}>
              <Link to={`/${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
                <p>{node.timeToRead}min read</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Index