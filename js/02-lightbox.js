import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector("ul.gallery");
const galleryItemsElement = galleryItems
      .map(element => {
            const image = `<a class="gallery__item" href="${element.original}" >
    <img
      class="gallery__image"
      src="${element.preview}"
      alt="${element.description}"
      title="${element.description}"
    />
  </a>`;
      return image;
      })
      .join(" ");

gallery.insertAdjacentHTML("afterbegin", galleryItemsElement);

new SimpleLightbox(".gallery a", { captionDelay: 250 });