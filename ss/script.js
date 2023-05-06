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
  document.getElementById("Logo").classList.toggle("invertlogo")
	if (element.classList.contains("dark-mode")) {
    document.getElementById("switch").src = "img/moon.png";
    localStorage.setItem("darkModeEnabled", "true"); // speichere den aktuellen Modus im Local Storage
  } else {
    document.getElementById("switch").src = "img/sun.png";
    localStorage.setItem("darkModeEnabled", "false"); // speichere den aktuellen Modus im Local Storage
  }
}

// überprüfe beim Laden der Seite, ob der Dark Mode aktiviert ist
function restoreDarkMode() {
  var isDarkModeEnabled = localStorage.getItem("darkModeEnabled"); // get the state from local storage
  if (isDarkModeEnabled === "true") { // check if the state is true
    document.body.classList.add("dark-mode"); // apply the class to the body
    document.getElementById("switch").src = "img/moon.png";
    document.getElementById("Logo").classList.toggle("invertlogo")
  }
}

restoreDarkMode(); // rufe die Funktion beim Laden der Seite auf, um den Dark Mode zu überprüfen
