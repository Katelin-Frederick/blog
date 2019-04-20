import React from 'react'

import profileImage from '../images/profilePic.jpg'
import bioStyles from './bio.module.scss'

const Bio = () => {
  return (
    <div className={bioStyles.container}>
      <div className={bioStyles.imageContainer}>
        <img src={profileImage} alt="Katelin Frederick" className={bioStyles.profilePic}/>
      </div>
      <p>Welcome! I'm Katelin Frederick and I am front end developer. I thoroughly enjoy creating new things and never shy away from a challenge. Seeing ideas and concepts come to life is one of my favorite parts of the development process. I look forward to continue growing and developing the skills I already have, as well as learning new ones!</p>
    </div>
  )
}

export default Bio;