import React  from 'react';
import Row from './../components/Row/Row';
import Banner from './../components/Banner/Banner';
import requests from './../sources/requests';

import Footer from '../LandingPage/Containers/footer';

export default  function AfterLogn() {

       return  (
    <>
   

    <Banner />
     <Row title="NETFLIX ORIGINALS" 
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow={true}
      
      ></Row>
  <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
  <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
        <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies}></Row>
   <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentary}></Row>
 

      <Footer />
    </>
  ) 
}