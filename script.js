// Function to toggle mobile nav
function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  const hamburger = document.getElementById("hamburger");

  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Close mobile navbar on window resize if it's greater than 991px
window.addEventListener("resize", function () {
  if (window.innerWidth > 991) {
    const nav = document.getElementById("mobileNav");
    const hamburger = document.getElementById("hamburger");
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  }
});
