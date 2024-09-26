// Sélection des éléments
const videoPlayer = document.getElementById('main-video');
const videoList = document.getElementById('video-list');
const videoItems = videoList.getElementsByTagName('li');


// Gestion de la playlist
for (let item of videoItems) {
    item.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-src');
        changeVideo(videoSrc, this);
        videoPlayer.play(); // Joue la vidéo après le changement
    });
}

// Fonction pour changer la vidéo
function changeVideo(src, target) {
    // Met à jour la source de la vidéo
    videoPlayer.src = src;

    // Supprime la classe active des autres éléments
    for (let item of videoItems) {
        item.classList.remove('bg-red-500', 'text-white', 'font-bold');
        item.classList.add('bg-gray-200');
    }

    // Ajoute la classe active à l'élément sélectionné
    target.classList.add('bg-red-500', 'text-white', 'font-bold');
    target.classList.remove('bg-gray-200');

    // Joue la nouvelle vidéo
    videoPlayer.play();
}

// Gestionnaire d'événements pour la playlist
for (let item of videoItems) {
    item.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-src');
        changeVideo(videoSrc, this);
        videoPlayer.play();
    });
}

// Autoplay de la première vidéo au chargement
window.onload = function() {
    //const videoPlayer = document.getElementById('main-video');
    videoPlayer.play();
};

tailwind.config = {
    theme: {
      extend: {
        colors: {
          customBlue: '#1fb6ff',
        }
      }
    },
    darkMode: 'class', // Active le mode sombre basé sur la classe
  }

  

  // Fonction qui met à jour les dimensions de la fenêtre
  function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('window-size').textContent = `Largeur : ${width}px, Hauteur : ${height}px`;
}

// Exécuter la fonction au chargement de la page
updateWindowSize();

// Mettre à jour les dimensions chaque fois que la fenêtre est redimensionnée
window.addEventListener('resize', updateWindowSize);