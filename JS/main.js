// EITHER CLICKS OR TOUCHSTARTS DEPENDING ON DEVICE
var clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true)
      return 'touchstart';
    else
      return 'click';
})();



// BURGER MENU - NAVIGATION SLIDE OUT


const navSlide = () => {
    const burgerMenu = document.querySelector('.burgerMenu');
    const navLinks = document.querySelector('.navLinks');
    const navLink = navLinks.querySelectorAll('li')
    
    // TOGGLE NAV
    burgerMenu.addEventListener(clickEvent, () => {
        navLinks.classList.toggle('navLinksShow')

        navLink.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }  else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        })
    })
}

const galleryButton = document.querySelectorAll('.galleryButton');
GalleryPhotos = document.querySelectorAll('.galleryIMGContainer');
const galleryText = document.querySelectorAll('.galleryText');

galleryButton.forEach((team, i) => {
    
    team.addEventListener(clickEvent, () => {

        GalleryPhotos.forEach((photo) => {
            photo.classList.remove('galleryIMGShow')
        })

        galleryButton.forEach((button) => {
            button.classList.remove('galleryButtonSelected')
        }) 

        galleryText.forEach((button) => {
            button.classList.remove('galleryTextSelected')
        }) 
        
        GalleryPhotos[i].classList.add('galleryIMGShow');
        galleryButton[i].classList.add('galleryButtonSelected');
        galleryText[i].classList.add('galleryTextSelected');
    })
})




const app = () => {
    navSlide()
}

app()