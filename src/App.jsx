import './App.css'
import responseMovies from './mocks/with-results.json'
// import withoutResults from './mocks/no-results.json'

function App () {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  const renderMovies = () => {
    return (
      <ul>
        {
          movies.map(movie => (
            <li key={movie.imbdID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))
        }
      </ul>
    )
  }

  const renderNoResults = () => {
    return (
      <p>No se encontraron resultados</p>
    )
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form'>
          <input placeholder='Transformers, Star Wars...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? renderMovies()
            : renderNoResults()
        }
      </main>
    </div>
  )
}

export default App
