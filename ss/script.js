function showImage(imageSrc) {
    var lightbox = document.querySelector('.lightbox');
    var lightboxImage = document.querySelector('#lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
  }
  function hideImage() {
    var lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
  }