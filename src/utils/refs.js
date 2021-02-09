const refs = {
  baseURL:
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=',
  keyAPI: '20181043-63559380747ebc8efe1373c68',

  form: document.getElementById('search-form'),
  userInput: document.querySelector('input[type="text"]'),

  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),

  spinner: document.querySelector('#spinner'),
};

export default refs;
