const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "60px",
    duration: 1200,
};

ScrollReveal().reveal(".header-image img",{
    ...scrollRevealOption,
    origin:"right",
    reset: true,
});
ScrollReveal().reveal(".header-content h1",{
    ...scrollRevealOption,
    delay: 500,
    reset: true,
});
ScrollReveal().reveal(".header-content h2",{
    ...scrollRevealOption,
    delay: 1000,
    reset: true,
});
ScrollReveal().reveal(".header-content p",{
    ...scrollRevealOption,
    delay: 1500,
    reset: true,
});
ScrollReveal().reveal(".header-btn",{
    ...scrollRevealOption,
    delay: 2000,
    reset: true,
});

ScrollReveal().reveal(".about-content .section-header",{
    ...scrollRevealOption,
    delay: 500,
    reset: true,
});
ScrollReveal().reveal(".about-content p",{
    ...scrollRevealOption,
    delay: 1000,
    reset: true,
});
ScrollReveal().reveal(".about-image img",{
    ...scrollRevealOption,
    origin: "left",
    delay: 400,
    reset: true,
});
ScrollReveal().reveal(".about-btn",{
    ...scrollRevealOption,
    delay: 1500,
    reset: true,
});
ScrollReveal().reveal(".service-card",{
    duration: 1000,
    interval: 500,
    reset: true,
});

ScrollReveal().reveal(".facility-content .section-header", {
    ...scrollRevealOption,
    reset: true,
  });
  ScrollReveal().reveal(".facility-content p", {
    ...scrollRevealOption,
    delay: 1000,
    reset: true,
  });
  ScrollReveal().reveal(".facility-image img", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
    reset: true,
  });
  
  ScrollReveal().reveal(".mentor-card", {
    ...scrollRevealOption,
    interval: 500,
    reset: true,
  });
  
  ScrollReveal().reveal(".banner-content h2", {
    ...scrollRevealOption,
    reset: true,
  });
  ScrollReveal().reveal(".banner-content p", {
    ...scrollRevealOption,
    delay: 500,
    reset: true,
  });