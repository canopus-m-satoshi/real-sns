import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from '@mui/icons-material'

import { Link } from 'react-router-dom'

import React from 'react'

import './Sidebar.css'
import { Users } from '../../dummydata'
import CloseFrined from '../closeFriend/CloseFrined'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to="/">
              <span className="sidarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <Link to="/">
              <span className="sidarListItemText">検索</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <Link to="/">
              <span className="sidarListItemText">通知</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon" />
            <Link to="/">
              <span className="sidarListItemText">メッセージ</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <Link to="/">
              <span className="sidarListItemText">ブックマーク</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <Link to="/profile/shincode">
              <span className="sidarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <Link to="/">
              <span className="sidarListItemText">設定</span>
            </Link>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <CloseFrined user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
