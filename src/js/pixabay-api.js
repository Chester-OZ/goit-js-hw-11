import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: '44613226-2c9c9ee480393e9e269050800',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 21,
  });

  const url = `${BASE_URL}?${params}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        urlError();
      } else {
        return data.hits;
      }
    })
    .catch(error => console.log(error));
}

const optionsError = {
  icon: '',
  backgroundColor: '#CB1E1E',
  position: 'topRight',
  messageColor: 'white',
  close: false,
  closeOnEscape: true,
  closeOnClick: true,
  displayMode: 'replace',
};

const urlError = () =>
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please, try again!',
    ...optionsError,
  });

const showError = message =>
  iziToast.error({
    message: 'Please! Type something.',
    ...optionsError,
  });

export { fetchImages, showError };
