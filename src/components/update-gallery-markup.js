import imageTpl from '../templates/imageCard.hbs';
import refs from '../utils/refs.js';

function updateGalleryMarkup(hits) {
  const markup = imageTpl(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  refs.loadMoreBtn.classList.remove('hidden');
  refs.loadMoreBtn.classList.add('show');
}

export default updateGalleryMarkup;
