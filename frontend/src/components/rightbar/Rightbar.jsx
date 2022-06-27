import React from 'react'

import './Rightbar.css'

const Rightbar = () => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="./assets/star.png" alt=" " className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img src="./assets/event.jpeg" alt="" className="eventImg" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="sidebarFriendListItem">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">shincode</span>
          </li>
          <li className="sidebarFriendListItem">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">tanaka</span>
          </li>
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          src="./assets/promotion/promotion1.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">ショッピング</p>
        <img
          src="./assets/promotion/promotion2.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">カーショップ</p>
        <img
          src="./assets/promotion/promotion3.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">Shin Code株式会社</p>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <HomeRightbar />
        {/* {user ? <ProfileRightbar /> : <HomeRightbar />} */}
      </div>
    </div>
  )
}

export default Rightbar
