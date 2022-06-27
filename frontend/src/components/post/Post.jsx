import { MoreVert } from '@mui/icons-material'

import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Shincode</span>
            <span className="postDate">5分前</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">SNS自作中です</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">150人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">400:コメント</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
