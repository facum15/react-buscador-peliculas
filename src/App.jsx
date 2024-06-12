import './App.css'

function App () {
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
        Aqui los resultados
      </main>
    </div>
  )
}

export default App
