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

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el, index) => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            // delay tăng dần theo thứ tự
            el.style.transitionDelay = `${index * 0.2}s`;
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);