import InfiniteScroll from 'infinite-scroll';
const infScroll = new InfiniteScroll('.gallery', {
  path: function () {
    return (
      'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=' +
      ref.search +
      '&page=' +
      (this.pageIndex + 1) +
      '&per_page=12&key=' +
      ref.TOKEN
    );
  },
  responseType: 'text',
  status: '.scroll-status',
  history: false,
});
infScroll.on('load', function (response) {
  const data = JSON.parse(response);
  ref.loading.classList.add('show');
  data.hits.forEach(el =>
    ref.gallery.insertAdjacentHTML('beforeend', `${imageTemplate(el)}`),
  );
  const { scrollTop, clientHeight } = document.documentElement;
  window.scrollTo({
    top: scrollTop + clientHeight,
    behavior: 'smooth',
  });
  ref.loading.classList.remove('show');
  if (data.total % 12 === this.loadCount) {
    error({ delay: 3500, text: 'No more images in this category' });
    infScroll.off;
  }
});
