import './App.css'
import { Movies } from './components/Movies'
import responseMovies from './mocks/with-results.json'
// import withoutResults from './mocks/no-results.json'
function App () {
  const movies = responseMovies.Search

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
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
