import logo from './logo.svg'
import './App.css'
import FindMovie from './FindMovie/FindMovie'
import MovieInfo from './MovieInfo/MovieInfo'
import Nav from './Nav/Nav'
import { useState } from 'react'

function App() {
  const [movie, setMovie] = useState()

  return (
    <div className='App'>
      <header className='App-header'>
        <Nav stateChanger={setMovie}></Nav>
        {movie && <MovieInfo movie={movie}></MovieInfo>}
      </header>
    </div>
  )
}

export default App
