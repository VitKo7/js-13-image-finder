import refs from '../utils/refs.js';

function fetchPhotos(searchQuery, page = 1) {
  let url = `${refs.baseURL}${searchQuery}&page=${page}&per_page=12&key=${refs.keyAPI}`;

  return fetch(url)
    .then(response => {
      if (response.status === 200) return response.json();
      throw new Error('Error fetching data');
    })
    .then(({ hits }) => hits)
    .catch(err => {
      return console.error('Error: >>', err);
    });
}

export default fetchPhotos;
