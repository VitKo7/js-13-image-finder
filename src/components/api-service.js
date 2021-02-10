import refs from '../utils/refs.js';

export default {
  searchQuery: '',
  page: 1,

  fetchPhotos() {
    let url = `${refs.baseURL}${this.query}&per_page=12&key=${refs.keyAPI}&page=${this.page}`;

    return fetch(url)
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error('Error fetching data');
      })
      .then(({ hits }) => {
        this.incementPage();
        return hits;
      })
      .catch(err => {
        return console.error('Error: >>', err);
      });
  },
  resetPage() {
    this.page = 1;
  },
  incementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
