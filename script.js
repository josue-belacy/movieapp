const API_URL ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2fd83167750aea52bd28bde79618d45f&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2fd83167750aea52bd28bde79618d45f&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHtml = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search

  if(searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})