import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <secction className="error-page">

    <div className='center'>
      <Link to='/' className='btn primary'>go back home</Link>
    <h2>page Not Found</h2>
    </div>
    </secction>
  )
}

export default Error
