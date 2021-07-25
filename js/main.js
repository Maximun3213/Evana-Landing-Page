// ///////// Animate Modules //////////
// const cardItem = document.querySelectorAll('.feature__warp__item');
// let delay = 1;

// const anime = (element, animation) => {
//     if (element.offsetParent != null) {

//         if (!element.classList.contains(animation)) {
//             element.classList.add(animation);

//             element.style.animationDelay = `${delay}` * 0.2 + "s";
//             delay++;
//         }
//     }
// };

// const isInViewport = (element) => {
//     var bounding = element.getBoundingClientRect();
//     return (
//         bounding.bottom >= 0 &&
//         bounding.right >= 0 &&
//         bounding.top <= document.documentElement.clientHeight &&
//         bounding.left <= document.documentElement.clientWidth
//     )
// };

// const isItemVisible = (element, animation) => {
//     if (isInViewport(element)) {
//         if (window.innerWidth >= 1920) {
//             anime(element, animation);
//         }
//     }
// };

// // for viewport
// const animeItem = (item, animation) => {
//     item.forEach(item => {
//         isItemVisible(item, animation);
//     })
//     delay = 1;
// };

// // for scroll
// window.addEventListener('scroll', () => {
//     if (window.innerWidth >= 360) {
//         animeItem(cardItem, "anime");
//     }

// });
// // to load the animations

// animeItem(cardItem, "anime");

//Tab active
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");
const scrollToTop = document.querySelector(".scrollToTop");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        const index = Array.from(pages).indexOf(entry.target);
        tabs.forEach((tab) => {
          tab.classList.remove("activeTab");
        });
        tabs[index].classList.add("activeTab");
      }
    });
  },
  {
    threshold: 0.25,
  }
);

pages.forEach((page) => {
  observer.observe(page);
});

const header = document.querySelector(".header-color");
const shape = document.querySelector(".banner__shape");
const text_opa = document.querySelector(".banner__text-opa");

//Add Class thường
text_opa.classList.add("tracking-in-expand");
shape.classList.add("scale-up-hor-left");

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if ((top) => 112) {
    header.classList.add("active");
  }
  if (top <= 112) {
    header.classList.remove("active");
  }
};

//Animation riêng lẻ
const about = document.querySelector(".about__content-2");
const text = document.querySelector(".about__content");
const text__about = document.querySelector(".about__heading");
const banner__content = document.querySelector(".banner__content");
const feature__img = document.querySelector(".feature__img");
const video__heading = document.querySelector(".video__heading");
const video__content = document.querySelector(".video__content");
const service__heading = document.querySelector(".service__heading");
const article__img = document.querySelector(".article__img");
const article__content = document.querySelector(".article__content");
const team__heading = document.querySelector(".team__heading");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn");
    }
  });
};

const callback2 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeInLeft");
    }
  });
};

const callback3 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("special");
    }
  });
};

const callback5 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn2");
    }
  });
};

const callback4 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeInLeftOpa");
    }
  });
};

const options = {};

const myObserver = new IntersectionObserver(callback, options);
const myObserver2 = new IntersectionObserver(callback2, options);
const myObserver3 = new IntersectionObserver(callback3, options);
const myObserver4 = new IntersectionObserver(callback4, options);
const myObserver5 = new IntersectionObserver(callback5, options);
myObserver.observe(about);
myObserver.observe(service__heading);
myObserver.observe(team__heading);
myObserver.observe(article__content);
myObserver.observe(video__content);

myObserver2.observe(article__img);
myObserver.observe(banner__content);
myObserver2.observe(text);
myObserver3.observe(text__about);
myObserver4.observe(video__heading);

var x = window.innerWidth;
console.log(x);
if (x <= 812) {
  myObserver5.observe(about);
} else {
  myObserver2.observe(feature__img);
  myObserver.observe(about);
}
// Nhiều items

const feature__warp__item = document.querySelectorAll(".feature__warp__item");
const feature__animate = document.querySelectorAll(".feature__animate");
const galary__items = document.querySelectorAll(".galary__items");
const service__warp__items = document.querySelectorAll(".service__warp__items");
const team__warp__item = document.querySelectorAll(".team__warp__item");
const email__animate = document.querySelectorAll(".email__animate");

feature__warp__item.forEach((feature__warp__item) => {
  myObserver.observe(feature__warp__item);
});
feature__animate.forEach((feature__animate) => {
  myObserver.observe(feature__animate);
});
galary__items.forEach((galary__items) => {
  myObserver.observe(galary__items);
});
service__warp__items.forEach((service__warp__items) => {
  myObserver.observe(service__warp__items);
});
team__warp__item.forEach((team__warp__item) => {
  myObserver.observe(team__warp__item);
});
email__animate.forEach((email__animate) => {
  myObserver.observe(email__animate);
});

//Modal Video
const modals = document.querySelectorAll("[data-modal]");
const video = document.querySelector(".video__modal");

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
        video.pause();
        video.currentTime = 0;
      });
    });
  });
});

//Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("blogSlides");
  var dots = document.getElementsByClassName("blogSlider__dots--dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}

//menu tab

const navSlide = () => {
  const open = document.querySelector(".header__menu__respon");
  const menu = document.querySelector(".header__menu");
  const close = document.querySelector(".header__close");
  const color = document.querySelector(".header-color");
  console.log(menu);
  open.addEventListener("click", () => {
    menu.classList.add("nav-active");
    color.classList.add("header__color__active");
  });
  close.addEventListener("click", () => {
    menu.classList.remove("nav-active");
    color.classList.remove("header__color__active");
  });
};

navSlide();
