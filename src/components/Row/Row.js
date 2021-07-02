import  React, { useEffect, useState } from 'react';
import axios from '../../sources/axios';
import './Row.css';
import YouTube  from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = "https://image.tmdb.org/t/p/original/";
export default function Row({ title, fetchUrl , isLargeRow}) {
  const [movies,setMovies] = useState([]);
  const [trailerUrl , setTrailer ] = useState("");
  useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchUrl);
           setMovies(request.data.results);
          return request;
        } 
        fetchData();
  }, [fetchUrl]);
  const opts = {
    height : "390",
    width: "100%",
    playerVars: {
      autoplay:1,
    },
  }
  const handleClick = (movie) => {
               if(trailerUrl) {
                 setTrailer('');

               } else {
                 movieTrailer(movie?.name || "")
                 .then((url) => {
                   const urlParams = new URLSearchParams(new URL(url).search);
                  setTrailer(urlParams.get('v'));
                 })
                 .catch((error) => console.log(error));
               }
  }
  return (
    <>
       <div className="row">
         <h2> {title}</h2>
          <div className="row_posters">
            {movies.map(movie => (
              <img className={`row_img ${isLargeRow && "row_imgLarge"}`} 
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />

            ))}
          </div>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
       </div>
    </>
  )
}