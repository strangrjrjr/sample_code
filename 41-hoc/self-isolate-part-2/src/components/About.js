import React from 'react'
import {Link} from 'react-router-dom'

 function About(props) {
  return (
    <div>
      <h1>This is the About Page</h1>
      <Link to="/">HOME</Link>  
      <Link to="/todo">TODOS</Link>
    </div>
  )
}

export default About;
