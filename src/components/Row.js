import React, {useState, useEffect} from 'react';
import axios from '../services/axios';
import '../css/Row.css';
import CONST_URLS from '../constants/TMDB';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title, fetchURL, isLargeRow}) {
    // useState([]) -> '[]' states initialize with empty array.
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //useEffect hook - Code runs everytime Row is loaded.
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },
    // kept [] blank -> execute above once.
    // if inserted var eg [movies], run everytime movies changes.
    [fetchURL]);

    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        console.log("name: " + movie?.name);
        movieTrailer(movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          console.log("UR: " + url);
          const urlParams = new URLSearchParams(url);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
      }
    };
    
      
    const opts = {
      heigth:"390",
      width:"100%",
      player: {
        autoplay: 1,
      },
    };
    
    return (
      <div className='row'>
          <h2>{title}</h2>
          <div className='row__posters'>
            {
              movies.map(
                movie => (
                  <img 
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key={movie.id}
                    src={`${CONST_URLS.BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                  />
                )
              )
            }

          </div>
          { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    )
}

export default Row;