const API_KEY="5cce65ea1a7177c59889aed8e5b0a955";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentary:`/discover/movie?api_key=${API_KEY}&with_genres=99`,


}

export default requests;