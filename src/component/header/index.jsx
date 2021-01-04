import React, {useState} from 'react';
import './index.scss';
import img_logo from '../../assets/logo.svg';
import { Link }  from 'react-router-dom';
import {FaAlignJustify} from 'react-icons/fa';
import Search from '../search';

export default () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const ShowSidebar = () => setOpen(!open);
  return (
    <div>
      <div className="header">
        <div className="header_conrtainer">
          <div className="header_conrtainer--logo">
            <Link to="/"><img src={img_logo} alt="logo"/></Link>
          </div>
          <div className="header_conrtainer--navbar">
            <div className="navbar">
              <ul className="list">
                <li className="item"><Link to="/popular" className="cool-link">Popular</Link></li>
                <li className="item"><Link to="/" className="cool-link">All movies</Link></li>
              </ul>
            </div>
            <Search />
            <div className="IconDrawer" onClick={ShowSidebar}>
              <FaAlignJustify />
            </div>
          </div>
        </div>
      </div>
      <div className={open ? "drawer" : "drawer_none"}>
        <ul className="drawer_list">
          <li className="drawer_item">Popular</li>
          <li className="drawer_item">All Movies</li>
          <li className="drawer_item">About</li>
          <li className="drawer_item">Contact</li>
        </ul>
      </div>
    </div>
  )
}
