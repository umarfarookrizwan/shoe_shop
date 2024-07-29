const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__image__content ", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".product__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      depth: 600,
      modifier: 1,
      scale: 0.8, // Adjust the scale of the neighboring slides
      slideShadows: false,
      stretch: 700, // Adjust stretch value to fit your design
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  
document.addEventListener("DOMContentLoaded", function () {
    const colorOptions = document.querySelectorAll(".color-option");
    const mainProductImage = document.getElementById("main-product-image");
  
    colorOptions.forEach(option => {
      option.addEventListener("click", function () {
        const newImageSrc = option.getAttribute("data-image");
        mainProductImage.setAttribute("src", newImageSrc);
  
        // Remove active class from all options and add to the clicked one
        colorOptions.forEach(option => option.classList.remove("active"));
        option.classList.add("active");
      });
    });
  });
  // Example JavaScript for quantity controls
document.querySelectorAll('.quantity-controls button').forEach(button => {
    button.addEventListener('click', (e) => {
        const input = e.target.parentElement.querySelector('input');
        let value = parseInt(input.value);
        if (e.target.textContent === '+') {
            value++;
        } else {
            value = value > 1 ? value - 1 : 1;
        }
        input.value = value;
    });
});

  
  
