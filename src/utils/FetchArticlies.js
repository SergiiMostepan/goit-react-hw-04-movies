import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

export const fetchFilms = (
  varCall,
  query = '',
  call = 'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3',
  apiKey = '?api_key=4a5cadf6daa6bc485963a82552edeadc',
) => {
  return axios
    .get(`${call}${varCall}${apiKey}${query}`)
    .then(response => response.data);
};

export const fetchFilm = (
  id,
  varApi,
  call = 'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/',
  apiKey = '?api_key=4a5cadf6daa6bc485963a82552edeadc',
) => {
  return axios
    .get(`${call}${id}${varApi}${apiKey}`)
    .then(response => response.data);
};
