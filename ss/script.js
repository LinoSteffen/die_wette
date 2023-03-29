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



function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
	if (element.classList.contains("dark-mode")) {
    document.getElementById("Logo").src = "img/LS white.png";
    document.getElementById("switch").src = "img/moon.png";
    } else {
    document.getElementById("Logo").src = "img/LS black.png";
    document.getElementById("switch").src = "img/sun.png";
    }
}

