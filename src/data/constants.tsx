const URL = 'https://api.themoviedb.org/3';
const APIKEY = '0d1aa6e5a33f17497e9b24fc7382958c';
const IMAGE_URL = 'https://image.tmdb.org/t/p';
const APISTRING = `?api_key=${APIKEY}&language=pt-BR`;
const EVENTS = {
  PosterClick: 'PosterClick',
  ModalClose: 'ModalClose',
};

export default {
  URL,
  APIKEY,
  IMAGE_URL,
  APISTRING,
  EVENTS
}