import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';


export default() => {
  return (
    <div className="search">
      <input type="text" placeholder="Type to search"/>
      <Link to="/"><FaSearch /></Link>
    </div>
  )
}


