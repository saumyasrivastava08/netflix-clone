import  React, { useEffect, useState , useContext } from 'react';
import axios from '../../sources/axios'
import requests from '../../sources/requests';
import './banner.css';
import logo from '../Navbar/logo/logo1/flixlogo.png'
import * as ROUTES from '../../Routes/routes'
import { FirebaseContext } from '../../Firebase/firebaseContext';
import { Link } from 'react-router-dom';
export default function Banner() {
   const { firebase } = useContext(FirebaseContext);
 const [movie,setMovies] = useState([]);
 useEffect(() => {
        async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
           setMovies(request.data.results[
             Math.floor(Math.random() * request.data.results.length)
           ]);
          return request;
        }  
        fetchData();
  }, []);
  function truncate(str,n) {
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
  }
  return (
    
      <header className="banner"
       style={{
         backgroundSize:"cover",
         backgroundImage: `url(
           "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
         )`,
         backgroundPosition:"center center"
       }}
       >
         <div>
  <Link to={ROUTES.HOME}>  <img src={logo} alt="NETFLIX" className="bannerlogo"  to={ROUTES.HOME }/></Link>
              
<input type="button" value="LOGOUT" style={{float: "right" , cursor:"pointer" ,  color: "#fff",
  fontSize: "12px",
  fontWeight: "bold",
  marginBottom: "28px",
  backgroundColor:"red",
  marginTop:"1rem",
  marginRight:"0.5rem",
  padding: "0.5rem 2rem 0.5rem 2rem"}} onClick={() => firebase.auth().signOut()}/>
      
         </div>
         
        <div className="banner_contents">
             <h1 className="banner_title">
               {movie?.title || movie?.name || movie?.original_name}
             </h1>
             <div className="banner_buttons">
               <button className="banner_button">Play</button>
               <button className="banner_button">My List</button>
             </div>
             <h1 className="banner_desc">
              {truncate(movie?.overview, 150)};
             </h1>
        </div>
        
      </header>
     
    
  )
}