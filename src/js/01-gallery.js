// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const containerRef = document.querySelector('.gallery');

const imagesHtml = createImagesHtml(galleryItems);

containerRef.insertAdjacentHTML('beforeend' ,imagesHtml);


function createImagesHtml(images) {
    return galleryItems.map((img) => {
        return `<a class="gallery__item" href="${img.original}">
                        <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
                </a>`
    }).join('')
}

const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

containerRef.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return
    }

    gallery.next()
}
