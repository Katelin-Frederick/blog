import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

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
        <Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link>
      </h1>
      <ul id={headerStyles.socialLinks}>
        <li><Link to="/" className={headerStyles.textLink}>Blog</Link></li>
        <li>
          <a href="https://www.katelin-frederick.com/" 
            className={headerStyles.textLink}
            target="_blank"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a href="https://github.com/Katelin-Frederick" target="_blank">
            <FontAwesomeIcon icon={faGithub} color="rgb(102, 43, 129)" size="2x" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/katelin-frederick-838b19167/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} color="rgb(0, 127, 178)" size="2x" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/KatieFrederick4" target="_blank">
            <FontAwesomeIcon icon={faTwitter} color="rgb(0, 172, 237)" size="2x" />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header