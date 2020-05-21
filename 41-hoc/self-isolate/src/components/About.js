import React from 'react'
import {Link} from 'react-router-dom'
import PrivacyHOC from '../HOCs/PrivacyHOC'

 function About(props) {
  return (
    <div>
      <h1>This is the About Page</h1>
      <Link to="/">HOME</Link>
      <button onClick={() => props.history.push('/todo') }>Go to TODOs</button>
    </div>
  )
}

export default About;
