import React, {useState, useEffect} from 'react';
import axios from '../services/axios';
import apis from '../services/apis';
import CONST_URLS from '../constants/TMDB';
import '../css/Banner.css';

function Banner() {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const req = await axios.get(apis.fetchNetflixOriginals);
        setmovie(
            req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]
        );
        return req;
      }
      fetchData();
    }, []);
    
    console.log(movie);

    function truncate(str, n) {
      return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }
    return (
        <header className='banner'
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${CONST_URLS.BASE_URL}${movie?.backdrop_path})`, 
          }}
        >
          <div className='banner__contents'>
            <h1 className='banner__title'>
              {movie?.title || movie?.name || movie?.original_name }
            </h1>

            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>

            <h1 className="banner__description">
              {truncate(movie?.overview, 200)}
            </h1>
          </div>
          <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner