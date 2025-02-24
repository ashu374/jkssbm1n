// Cookie Consent Logic
function acceptCookies() {
  document.getElementById("cookieConsent").style.display = "none";
  localStorage.setItem("cookieConsent", "accepted");
  gtag('consent', 'update', {
    'analytics_storage': 'granted'
  });
}

if (localStorage.getItem("cookieConsent") === "accepted") {
  document.getElementById("cookieConsent").style.display = "none";
}

// Toggle Navigation for Mobile
function toggleNavigation() {
  const nav = document.getElementById("myTopnav");
  if (!document.body.classList.contains("home")) { // Only toggle on non-home pages
    if (nav.classList.contains("responsive")) {
      nav.classList.remove("responsive");
    } else {
      nav.classList.add("responsive");
    }
  }
}

// Back-to-Top Button Logic
window.addEventListener("scroll", function () {
  const button = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
