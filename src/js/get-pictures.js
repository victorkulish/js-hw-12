import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export { getPictures };

const perPage = 40;

async function getPictures(name, page) {
  const KEY = '46359588-09116391d0d94e56de7df57e6';

  try {
    if (name.includes(' ')) {
      name.replace(/\s+/g, '+');
    }

    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: KEY,
        q: name,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });
    return response;
  } catch {
    iziToast.error({
      title: 'Error',
      message: 'Sorry! The site is currently unavailable. Please try later!',
    });
    console.error(error.message);
  }
}
