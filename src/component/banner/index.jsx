import React from 'react';
import './index.scss';

export default() => {
  return (
    <div className="banner">
      <div className="banner_main">
        <div className="banner_main--title">
          <h2>Wellcome.</h2>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
        <div className="banner_main--input">
          <input type="text" placeholder="Search for movie, tv show, person..."/>
        </div>
      </div>
    </div>
  )
}
