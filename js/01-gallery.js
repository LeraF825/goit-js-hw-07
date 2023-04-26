import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryItem = galleryItems.map(image =>{
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>
  `
})
.join('');

galleryList.insertAdjacentHTML('beforeend',galleryItem);
galleryList.addEventListener('click',onGalleryClick);

function onGalleryClick(e){
    e.preventDefault();   

    if(e.target.nodeName !== 'IMG') return;
    
    const originalImage = e.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${originalImage}" width="800" height="600">`);
    instance.show();

galleryList.addEventListener('keydown', (e)=>{
    if(e.code === 'Escape'){
    instance.close();
    }
 });
}

