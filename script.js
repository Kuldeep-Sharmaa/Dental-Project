// grab your elements once
const nav = document.getElementById("mobileNav");
const hamburger = document.getElementById("hamburger");

// toggle handler (same as you already have)
function toggleMobileNav() {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
}
// close on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

document.querySelectorAll("#mobileNav a").forEach((link) => {
  link.addEventListener("click", () => {
    // only if it’s currently open
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// whatsapp button animation
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("whatsappBtn");
  const msg = document.getElementById("whatsappMsg");

  setTimeout(() => {
    btn.classList.add("show-text");
    msg.style.animation = "typing-once 3s steps(30,end) forwards";
    msg.style.opacity = "1";
    setTimeout(() => {
      msg.style.animation = "fadeOut 0.5s forwards";
      // Remove gap after fade-out completes
      setTimeout(() => {
        btn.classList.remove("show-text");
      }, 500);
    }, 4000);
  }, 6000); // delay 6s before typing starts
});
