
// **********************
// ***** NAVIGATION *****
// **********************

const primaryNav = document.querySelector('.navigation__menu');
const navToggle = document.querySelector('.navigation__toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true')
    } else if (visibility === 'true'){
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false')
    }
});

// ******************
// ***** SWIPER *****
// ******************

new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1.8,
    spaceBetween: 30,
    slidesOffsetAfter: 80,
    breakpoints:{

        1000:{
            slidesPerView: 3,
            enabled: false,
            width: 900,
        }
    }
  });