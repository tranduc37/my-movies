import React , {useState, useEffect, useContext } from 'react';
import './index.scss';
import axios from 'axios';

export default (props) => {
  const [film, setFilm] = useState({})

  const getFilmDetail = () => {
      axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=1&fbclid=IwAR2E0_4SNa4ilrD-GbIqKUfzkgBKvfWXuHwN0ffQo5-wlk185NA_L-jA4jg/${props.match.params.id}`,
      })
      .then( (response) => {
        console.log(response);
        setFilm(response.data);
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    if(props.match.params.id) {
      getFilmDetail();
    }
  }, []);

  return (
    <div className="container">
      <div className="detail" >
        <img src={film.backdrop_path} alt="image"/>
        <h1>{film.title}</h1>
        <p>number film {props.match.params.id}</p>
      </div>
    </div>
  )
}


