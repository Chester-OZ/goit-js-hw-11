import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images.map(image => createImageCard(image)).join('');
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      showCounter: false,
      fadeSpeed: 250,
    });
  }
}

function createImageCard(image) {
  return `<li class="gallery-item">
          <div class="gallery-item-image">
          <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" /></a>
          </div>
          <ul class="image-details">
            <li class="image-details-item">
              <h2 class="image-details-title">Likes</h2>
              <p class="image-details-value">${image.likes}</p>
            </li>
            <li class="image-details-item">
              <h2 class="image-details-title">Views</h2>
              <p class="image-details-value">${image.views}</p>
            </li>
            <li class="image-details-item">
              <h2 class="image-details-title">Comments</h2>
              <p class="image-details-value">${image.comments}</p>
            </li>
            <li class="image-details-item">
              <h2 class="image-details-title">Downloads</h2>
              <p class="image-details-value">${image.downloads}</p>
            </li>
          </ul>
        </li>`;
}

function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export { renderGallery, showLoader, hideLoader, clearGallery };
