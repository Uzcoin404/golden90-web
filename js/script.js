new Splide(".splide", {
    type: "loop",
    pagination: false,
    // autoplay: true
}).mount();
new Splide(".games_box_slide", {
    type: 'loop',
    pagination: false,
    arrows: false,
    autoplay: true,
    perPage: 8,
    perMove: 1,
    breakpoints: {
		992: {
			perPage: 6,
		},
		575: {
			perPage: 4,
		},
  }
}).mount();

const closeBtn = document.querySelector("#header_warn_close");
const warn = document.querySelector(".header__warning");
closeBtn.addEventListener("click", function () {
    warn.style.display = "none";
});

// const navbar = document.querySelector(".desktop__nav");
// document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 40) {
//             navbar.classList.add("fixed-top");
//             navbar.style.top = '0';
//         } else {
//             navbar.classList.remove("fixed-top");
//             navbar.style.top = '-40px';
//         }
//     });
// });
