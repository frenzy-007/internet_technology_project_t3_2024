$(document).ready(function () {
  const menuIcon = $(".menu-icon");
  const navMenu = $(".nav-menu");
  const menuIconElement = menuIcon.find("i");

  // Toggle the menu on click
  menuIcon.on("click", function () {
    // If the page is not at the top, scroll to the top and keep the menu open
    if (window.scrollY !== 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll to top
      });

      // Ensure the menu is open after scrolling
      navMenu.addClass("open");
      menuIconElement.removeClass("fa-bars").addClass("fa-times");
      menuIcon.attr("aria-label", "Close Menu");
    } else {
      // If the page is at the top, toggle the menu normally
      navMenu.toggleClass("open");

      if (navMenu.hasClass("open")) {
        menuIconElement.removeClass("fa-bars").addClass("fa-times");
        menuIcon.attr("aria-label", "Close Menu");
      } else {
        menuIconElement.removeClass("fa-times").addClass("fa-bars");
        menuIcon.attr("aria-label", "Open Menu");
      }
    }
  });

  // Close the menu when resizing the window added
  $(window).on("resize", function () {
    if (navMenu.hasClass("open")) {
      navMenu.removeClass("open");
      menuIconElement.removeClass("fa-times").addClass("fa-bars");
      menuIcon.attr("aria-label", "Open Menu");
    }
  });
});

$(document).ready(function () {
  const images = [
    "./assets/images/zamek.jpg",
    "./assets/images/zamek3.jpg",
    "./assets/images/spa.jpg",
    "./assets/images/zamek1.jpg",
    "./assets/images/nature1.jpg",
    "./assets/images/spa-town.jpg",
  ];

  let currentIndex = 0;

  function swapImage() {
    currentIndex = (currentIndex + 1) % images.length;

    $("#swappable-image").fadeOut(500, function () {
      $(this).attr("src", images[currentIndex]).fadeIn(500);
    });
  }

  setInterval(swapImage, 3000);

  $("#prev").click(function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    $("#swappable-image").attr("src", images[currentIndex]);
  });

  $("#next").click(function () {
    currentIndex = (currentIndex + 1) % images.length;
    $("#swappable-image").attr("src", images[currentIndex]);
  });
});

// Auto Adjustable Header height
function adjustPadding() {
  const logoContainer = document.querySelector(".container-logo");
  const logoHeight = logoContainer.offsetHeight; // Get dynamic height
  document.body.style.paddingTop = `${logoHeight}px`; // Apply as padding-top
}

// Run on page load and window resize
window.addEventListener("load", adjustPadding);
window.addEventListener("resize", adjustPadding);
