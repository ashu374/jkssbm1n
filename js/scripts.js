// Toggle navigation menu for responsive design
function toggleNavigation() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide back-to-top button based on scroll position
window.addEventListener("scroll", function () {
  const button = document.getElementById("backToTop");
  if (button) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
});

// Set up event listeners and active class on page load
document.addEventListener("DOMContentLoaded", function () {
  // Toggle navigation only on icon click
  const navIcon = document.querySelector(".topnav .icon");
  if (navIcon) {
    navIcon.addEventListener("click", toggleNavigation);
  }

  // Set active class based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".topnav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href").split("/").pop() || "index.html";
    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
