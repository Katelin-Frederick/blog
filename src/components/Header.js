import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './Header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link></h1>
    </header>
  )
}

export default Header