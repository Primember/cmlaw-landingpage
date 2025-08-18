document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!firstName || !lastName || !email || !subject || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Form submitted successfully!");
    this.reset();
});


/* back to top button handle */
// document.getElementById("back-To-Top-Btn").addEventListener("click", function (e) {
//     e.preventDefault(); 
//     $('html, body').animate({scrollTop:0}, '300');
// });
var btn = $('#back-To-Top-Btn');
      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

/*parallax scroll */
document.addEventListener('DOMContentLoaded', function() {
  const parallaxImages = document.querySelectorAll('.parallax-section');
  const speed = 0.5;

  window.addEventListener('scroll', function() {
    parallaxImages.forEach(function(el) {
      const rect = el.getBoundingClientRect();
      const distFromTop = rect.top;
      
      // Calculate the new Y position based on scroll distance
      const newY = distFromTop * speed;
      
      el.style.transform = `translateY(${newY}px)`;
    });
  });
});

// sticky header 
window.addEventListener("scroll", function() {
let navArea = document.getElementBy("pb-navbar");

if (window.pageYOffset > 0) {
navArea.classList.add("is-sticky");
} else {
navArea.classList.remove("is-sticky");
}
});
