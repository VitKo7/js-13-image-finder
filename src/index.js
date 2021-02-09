import refs from './utils/refs.js';
import apiService from './components/api-service.js';
import updateGalleryMarkup from './components/update-gallery-markup.js';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import './styles.css';

function handleSubmit(event) {
  event.preventDefault();

  apiService.query = refs.userInput.value.trim();
  refs.gallery.innerHTML = '';

  apiService.resetPage();
  fetchPhotos();
  refs.form.reset();
}

refs.form.addEventListener('submit', handleSubmit);

refs.loadMoreBtn.addEventListener('click', fetchPhotos);

function fetchPhotos() {
  refs.loadMoreBtn.classList.add('hidden');
  refs.spinner.classList.remove('hidden');

  apiService
    .fetchPhotos()
    .then(hits => {
      updateGalleryMarkup(hits);
      refs.loadMoreBtn.classList.remove('hidden');

      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .finally(() => {
      refs.spinner.classList.add('hidden');
    });
}

refs.gallery.addEventListener('click', event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  } else {
    basicLightbox
      .create(
        `<img width="1280" height="800" src="${event.target.dataset.large}">`,
      )
      .show();
  }
});
