import React, { useState } from 'react'
import {
  getMovieBySearch,
  getMovieById,
  getCastCrewById,
  getMovieWatchProviders,
} from '../../src/tmbdApi.js'
import TextInput from '../TextInput/TextInput'

function FindMovie({ stateChanger }) {
  const [searchTerm, setSeachTerm] = useState('')
  const [movie, setMovie] = useState('')
  const [showErr, setShowErr] = useState(false)

  const getMovie = async (e) => {
    e.preventDefault()
    const response = await getMovieBySearch(searchTerm)
    let data = await response

    if (data.total_results === 0) {
      setShowErr(true)
    } else {
      setShowErr(false)

      let movie = {
        id: data.results[0].id,
        title: data.results[0].title,
        release_date: data.results[0].release_date,
        release_year: data.results[0].release_date.split('-', 1),
      }

      const movieData = await getMovieById(movie.id)
      data = await movieData

      movie.overview = data.overview
      movie.poster_path = data.poster_path
      movie.runtime = data.runtime
      movie.vote_average = data.vote_average

      let runtimeTotal = data.runtime
      movie.runtimeHours = Math.floor(runtimeTotal / 60)
      movie.runtimeMinutes = runtimeTotal % 60

      movie.genres = data.genres

      // om vi vill hämta cast and crew
      const castCrewData = await getCastCrewById(movie.id)
      data = await castCrewData

      movie.actor1 = data.cast[0].name
      movie.actor2 = data.cast[1].name
      movie.actor3 = data.cast[2].name

      let directorFound = false
      data.crew.map((crew) => {
        if (crew.department == 'Directing' && !directorFound) {
          movie.director = crew.name
          directorFound = true
        }
      })

      const response = await getMovieWatchProviders(movie.id)
      data = await response

      if (data.results.SE.flatrate === 0) {
        setShowErr(true)
        console.log('nada')
      } else {
        setShowErr(false)
        console.log('movie providers', data.results.SE.flatrate)
        movie.providers = data.results.SE.flatrate

        stateChanger(movie)
      }
      console.log('movie', movie)
    }
  }
  const getWatchProviders = async (movieid, e) => {
    // e.preventDefault()

    console.log('movie in movieInfo', movieid)
    console.log('movie in movieInfo', movie.id)
    const response = await getMovieWatchProviders(movieid)
    let data = await response
    if (data.results.SE.flatrate === 0) {
      setShowErr(true)
      console.log('nada')
    } else {
      setShowErr(false)

      console.log('movie providers', data.results.SE.flatrate[0])
      movie.providers = data.results.SE.flatrate

      stateChanger(data.results.SE.flatrate[0])

      console.log('movie provider name', movie.providers[0].provider_name)
      console.log('movie provider name', movie.providers[0].logo_path)
    }
  }

  return (
    <>
      <form onSubmit={getMovie}>
        <TextInput
          value={searchTerm}
          setValue={setSeachTerm}
          // handleChange={getSuggestions(SuggestionData)}
        />
      </form>

      {/* {movie && <MovieInfo movie={movie}></MovieInfo>} */}

      {/* 
      <small>
        {' '}
        • {movie.runtimeHours}h {movie.runtimeMinutes}m
      </small>

      {movie.vote_average}

      <p> {movie.overview}</p>

      {movie.actor3 && (
        <div>
          <p>
            {' '}
            <strong>Actors</strong>
          </p>
          <p>
            {' '}
            {movie.actor1}, {movie.actor2}, {movie.actor3}
          </p>
        </div>
      )}

      {movie.director && (
        <div>
          <p>
            {' '}
            <strong>Director</strong>
          </p>
          <p> {movie.director}</p>
        </div>
      )} */}
    </>
  )
}

export default FindMovie
