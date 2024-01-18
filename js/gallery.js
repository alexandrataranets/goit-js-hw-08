const gallery = document.querySelector('.gallery');

const images = [
    {
      preview: "https://placekitten.com/200/300",
      original: "https://placekitten.com/800/1200",
      description: "Cute Kitten 1",
    },
];


const galleryItems = images.map(({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`).join('');

gallery.innerHTML = galleryItems;