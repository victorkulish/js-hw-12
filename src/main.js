import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './js/render-function';
import { getPictures } from './js/pixabay-api';
import { scrollingTopPage } from './js/scrolling';

const formSearch = document.querySelector('.js-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoader = document.querySelector('.btn-load');
const loaderMore = document.querySelector('.loader-more');
const endLoader = document.querySelector('.end-loader');
let currentPage = 1;
const perPage = 40; // Количество изображений на странице
let inputSearch = '';
let simpleLightboxExem;
let totalHits = 0; // Общее количество найденных изображений

loader.style.display = 'none';
loaderMore.style.display = 'none';
btnLoader.style.display = 'none';
endLoader.style.display = 'none';

formSearch.addEventListener('submit', onSearch);
btnLoader.addEventListener('click', onLoadMore);

scrollingTopPage();

async function onSearch(event) {
  event.preventDefault();

  currentPage = 1;
  listImages.innerHTML = '';
  loader.style.display = 'block';
  btnLoader.style.display = 'none';
  endLoader.style.display = 'none';

  inputSearch = event.target.elements.search.value.trim();

  if (!inputSearch) {
    iziToast.warning({
      title: 'Caution',
      message: 'Sorry, but you did not fill out the field!',
    });
    loader.style.display = 'none';
    return;
  }

  try {
    const { data } = await getPictures(inputSearch, currentPage);
    totalHits = data.totalHits;

    loader.style.display = 'none';

    if (!data.hits.length) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    listImages.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    iziToast.success({
      title: 'Wow',
      message: `We found ${data.totalHits} pictures!`,
    });

    simpleLightboxExem = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    }).refresh();

    // Проверка: если все изображения уже загружены
    if (totalHits <= perPage * currentPage) {
      endLoader.style.display = 'block';
    } else {
      btnLoader.style.display = 'block';
    }

    formSearch.reset();
  } catch (err) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    console.log(err);
  }
}

async function onLoadMore() {
  currentPage += 1;

  loaderMore.style.display = 'block';
  btnLoader.style.display = 'none';
  endLoader.style.display = 'none';

  const getHeightImgCard = () =>
    document.querySelector('.gallery-item').getBoundingClientRect();

  try {
    const { data } = await getPictures(inputSearch, currentPage);

    listImages.insertAdjacentHTML('beforeend', createMarkup(data.hits));

    window.scrollBy({
      top: getHeightImgCard().height * 2,
      left: 0,
      behavior: 'smooth',
    });

    simpleLightboxExem.refresh();

    // Обновленная проверка: если загружено все доступное количество изображений
    const totalLoadedImages = perPage * currentPage;
    if (totalLoadedImages >= totalHits) {
      iziToast.info({
        title: 'Caution',
        message: `We're sorry, but you've reached the end of search results.`,
      });
      endLoader.style.display = 'block';
      btnLoader.style.display = 'none';
    } else {
      btnLoader.style.display = 'block';
    }

    loaderMore.style.display = 'none';
  } catch (error) {
    loaderMore.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    console.log(error);
  }
}
