const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

window.addEventListener("scroll", function () {
  const parallax = document.querySelectorAll(".parallax");
  let scrollPosition = Number.parseInt(window.pageYOffset);
  parallax.forEach((item) => {
    item.style.backgroundPositionY = scrollPosition * -0.5 + "px";
  });
});
