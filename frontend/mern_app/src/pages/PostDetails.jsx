import React from 'react'

function PostDetails() {
  return (
    <section className="post-detail">
      <div className="post-detail_container">
        <div className="post-detail_header">

          <div className="post-detail_buttons">
            <Link to={'/posts/id/edit'} className='btn sm primary'>Edit</Link>
            <Link to={'/posts/id/'} className='btn sm primary'>Edit</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostDetails
