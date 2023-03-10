//const axios = require('axios')
const apiKey = '9d1d6a6efdcd6adbf672133bfea8f1f1'

export const getMovieById = async (id) => {
  console.log('id', id)
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9d1d6a6efdcd6adbf672133bfea8f1f1&language=en-US`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(
      'fångade ett error när ngt skulle hämtas i getMovieByID: ',
      error
    )
  }
}

export const getCastCrewById = async (id) => {
  console.log('Search term', id)
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9d1d6a6efdcd6adbf672133bfea8f1f1&language=en-US`
    )
    const data = await response.json()
    console.log('data', data)
    return data
  } catch (error) {
    console.log(
      'fångade ett error när ngt skulle hämtas i getCastCrewById: ',
      error
    )
  }
}

export const getMovieBySearch = async (value) => {
  console.log('Search term', value)
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9d1d6a6efdcd6adbf672133bfea8f1f1&language=en-US&page=1&include_adult=false&query=${value}&page=1`
    )
    const data = await response.json()
    console.log('data', data)
    return data
  } catch (error) {
    console.log(
      'fångade ett error när ngt skulle hämtas i getMovieBySearch: ',
      error
    )
  }
}

export const getMovieWatchProviders = async (movie_id) => {
  console.log('Search term', movie_id)
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=${apiKey}`
    )
    const data = await response.json()
    console.log('data', data)
    return data
  } catch (error) {
    console.log(
      'fångade ett error när ngt skulle hämtas i getMovieWatchProviders: ',
      error
    )
  }
}
