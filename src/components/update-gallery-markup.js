import imageTpl from '../templates/imageCard.hbs';
import refs from '../utils/refs.js';

import { success } from '@pnotify/core/dist/PNotify.js';
import '../utils/notification.js';

function updateGalleryMarkup(hits) {
  const markup = imageTpl(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  // let tags = [];
  // hits.forEach(i => tags.push(i.tags));
  // console.log(tags);

  success({
    title: 'We found such photos: ',
    text: `${hits[0].tags}`,
  });
}

export default updateGalleryMarkup;
