import React, { useState, useEffect } from 'react'
import './MovieInfo.css'
import '../Button/Button'
import Button from '../Button/Button'
import { getMovieWatchProviders } from '../tmbdApi.js'

const MovieInfo = ({ movie }) => {
  const [ShowErr, setShowErr] = useState()
  // useEffect(() => {
  //   getWatchProviders()
  // }, [])

  console.log('movie providers ', movie.providers)

  return (
    <div>
      {movie && (
        <div className='container'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt='movie poster'
            width='100%'
            className='poster'
          />

          <div>
            <h2>
              {movie.title} ({movie.release_year})
            </h2>
            <small> {movie.release_date} • </small>
            {movie.genres.map((genre, index) => (
              <small key={genre.id}>
                {index ? ',  ' : ''}
                {genre.name}
              </small>
            ))}
            <small>
              {' '}
              • {movie.runtimeHours}h {movie.runtimeMinutes}m
            </small>
            <small> Votes: {movie.vote_average.toFixed(1)}</small>
            <p> {movie.overview}</p>
            {movie.actor3 && (
              <div>
                <h3>Actors</h3>

                <p>
                  {movie.actor1}, {movie.actor2}, {movie.actor3}
                </p>
              </div>
            )}
            {movie.director && (
              <div>
                <h3>Director</h3>

                <p> {movie.director}</p>
              </div>
            )}
            <h3>Avaliable on</h3>
            <div className='providers'>
              {movie.providers &&
                movie.providers.map((providers, index) => (
                  <div
                    key={movie.providers[0].provider_name}
                    className='logoProviderName'
                  >
                    <img
                      alt='logo'
                      src={`https://www.themoviedb.org/t/p/original/${movie.providers[index].logo_path}`}
                      className='logoImg'
                    ></img>
                    <small>{movie.providers[index].provider_name}</small>
                  </div>
                ))}
              {!movie.providers && (
                <p>not avaliable on any streaming services in your region</p>
              )}
            </div>

            {/* <form onSubmit={getWatchProviders}>
              <Button>HEJ</Button>
            </form> */}
            <Button>Find Similar</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieInfo
