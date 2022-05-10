const API_URL ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2fd83167750aea52bd28bde79618d45f&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=fd83167750aea52bd28bde79618d45f&query="'

const form = document.getElementById('form')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results)
}