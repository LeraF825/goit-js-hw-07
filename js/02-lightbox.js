import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryItem = galleryItems.map(image =>{
    return `<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
       <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
 </li>`
})
.join('');

galleryList.insertAdjacentHTML('beforeend',galleryItem);
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
 });