import React from 'react'

import Share from '../share/Share'
import Post from '../post/Post'
import './Timeline.css'

import { Posts } from '../../dummydata'

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default Timeline
