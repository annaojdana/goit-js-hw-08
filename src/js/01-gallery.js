// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const markup = galleryItems
    .map((item) => `  <li class="gallery__item">
                        <a class="gallery__link" href="${item.original}">
                            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                        </a>
                    </li>`
  )
    .join("");
  
gallery.insertAdjacentHTML("afterbegin", markup);

const lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: "alt",
    captionDelay: 250,
});

