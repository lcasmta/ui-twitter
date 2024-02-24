import { House, Compass, Bell, BookmarkSimple, User, List, Envelope, FileText } from 'phosphor-react';
import twitterLogo from '../assets/logo-twitter.svg';
import '../global.css'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="sidebar"> <img className="logo" src={twitterLogo} alt="logo" />

      <nav className="main-navigation">
        <NavLink to="/"><House weight="fill" />Home</NavLink>
        <a href=""><Compass /> Explore</a>
        <a href=""><Bell />Notifications</a>
        <a href=""><Envelope />Messages</a>
        <a href=""><BookmarkSimple />Bookmarks</a>
        <a href=""><FileText />Lists</a>
        <a href=""><User />Profile</a>
        <a href=""><List />More</a>
      </nav>
      <button className="new-tweet" type="button">Tweet</button>

    </aside>
  )
}