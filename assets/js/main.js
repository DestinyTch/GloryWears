/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".products__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlider: true,
  slidePerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollUp class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});
sr.reveal(
  `.home__data, .products__container, .footer__container, .footer__info`
);
sr.reveal(`.home__images`, { delay: 600, origin: "bottom" });
sr.reveal(`.new__card, .brand__img`, { interval: 100 });
sr.reveal(`.collection__explore:nth-child(1)`, { origin: "right" });
sr.reveal(`.collection__explore:nth-child(2)`, { origin: "left" });

function showOfflineMessage() {
  document.getElementById('offline-message').style.visibility = 'visible';
}

// Function to hide the offline message
function hideOfflineMessage() {
  document.getElementById('offline-message').style.visibility = 'hidden';
}

// Function to show the online notification
function showOnlineNotification() {
  const notification = document.getElementById('online-notification');
  notification.style.visibility = 'visible';
  notification.classList.remove('fade-out'); // Remove any previous fade-out class
  setTimeout(() => {
    notification.classList.add('fade-out'); // Add fade-out class after showing
    setTimeout(() => {
      notification.style.visibility = 'hidden'; // Hide after fade-out
    }, 3000); // Matches the duration of fade-out animation
  }, 1000); // Show for 1 second before fading
}

// Event listeners to detect network status changes
window.addEventListener('offline', showOfflineMessage);
window.addEventListener('online', () => {
  hideOfflineMessage();
  showOnlineNotification();
});

// Initial check when the page loads
if (!navigator.onLine) {
  showOfflineMessage();
}

// Initialize ScrollReveal
ScrollReveal().reveal('.reveal', {
  duration: 1000,    // Animation duration in milliseconds
  origin: 'bottom',  // Animation starts from the bottom
  distance: '50px',  // Distance to animate the element
  easing: 'ease-in-out', // Type of easing for the animation
  reset: false       // Keep the animation once revealed
});
