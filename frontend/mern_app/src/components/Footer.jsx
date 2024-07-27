import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <h1>footer</h1>
    <div>
      <footer>
        <ul className="footer_categories">
           <li><Link to='/post/categories/:Agriculture'>Agriculture</Link></li>
          <li><Link to='/post/categories/:Business'>Business</Link></li>
          <li><Link to='/post/categories/:Art'>Art</Link></li>
          <li><Link to='/post/categories/:Education'>Education</Link></li>
          <li><Link to='/post/categories/:Weather'>Weather</Link></li> 
        </ul> 

        <div className="footer_copyrght">
          <small>All Rights Reserved &copy; Copyright</small>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Footer
