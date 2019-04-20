import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import blogStyles from './blog.module.scss'

const Blog = () => {
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
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          const { node } = edge
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${node.fields.slug}`}>
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

export default Blog