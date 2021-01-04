import React , {useState, useEffect, useContext } from 'react';
import './index.scss';
import { Grid, Container } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../dots';
import {LoadingContext} from '../../context/loadingContext';

export default () => {
  const [items, setItems] = useState([]);
  const [numberItem, setNumberItem] = useState(4);
  const [state, dispatch] = useContext(LoadingContext);



  let API_URL = 'http://image.tmdb.org/t/p/w500';
  //Call API
  const getItem = async () => {
    await axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=1&fbclid=IwAR2E0_4SNa4ilrD-GbIqKUfzkgBKvfWXuHwN0ffQo5-wlk185NA_L-jA4jg',
    })
    .then(res => {
      console.log(res)
      setItems(res.data.results)
    })
    .catch(err => {
      console.log(err);
    })
  }
  //Update Render Status
    useEffect(() => {
      getItem();
    }, []);

  //Load More
    const loadMore = () => {
      setNumberItem(pre => pre + 4)
      console.log('load more')
    }

  return (
    <Container maxWidth="lg">
      <div className="popular">
        <h3>Popuplar Movies</h3>
      </div>
      <Loading />
      <Link 
        // 
      >
        <Grid container xs={12}>
          {items.slice(0, numberItem).map((item)=>(
            <Grid item  xs={12} sm={4} md={3} className="list_image">
            <div className="image">
              <Link to={{
                pathname: `/detail/${item.id}`, 
              }}>
                <img src={`${API_URL}${item.backdrop_path}`} alt="image" className="image_img"/>
              </Link>
            </div>
          </Grid>
          ))}
        </Grid>
      </Link>
      <div className="load_more" onClick={loadMore}>
        <p className="load_more--text">LOAD MORE</p>
      </div>
    </Container>
  )
}


