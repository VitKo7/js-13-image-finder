import refs from './utils/refs.js';
import apiService from './components/api-service.js';
import updateGalleryMarkup from './components/update-gallery-markup.js';
import './styles.css';

// const loaderBtn = document.querySelector('.loader-button');
// let pageNumber = 1;
// function pageIncrease() {
//   event.preventDefault();
//   pageNumber += 1;
//   return pageNumber;
//   console.log(pageIncrease());

//   window.scrollTo({
//     left: 0,
//     top: window.innerHeight,
//     behavior: 'smooth',
//   });
// }
// console.log(pageNumber);

function handleSubmit(event) {
  event.preventDefault();

  apiService.query = refs.userInput.value.trim();

  refs.gallery.innerHTML = '';
  refs.form.reset();

  apiService.resetPage();
  apiService.fetchPhotos().then(hits => {
    updateGalleryMarkup(hits);
  });
}

refs.form.addEventListener('submit', handleSubmit);

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.fetchPhotos().then(hits => {
    updateGalleryMarkup(hits);
  });
});
