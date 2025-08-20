document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    // Clear old errors
    document.querySelectorAll("#contactForm .error-message").forEach(el => {
        el.innerText = "";
        el.style.display = "none";
    });
    document.querySelectorAll("#contactForm input, #contactForm textarea").forEach(el => {
        el.classList.remove("input-error");
    });

    // Get fields
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    // Validation
    if (!firstName.value.trim()) {
        showError(firstName, "Vui lòng nhập tên.");
        isValid = false;
    }

    if (!lastName.value.trim()) {
        showError(lastName, "Vui lòng nhập họ.");
        isValid = false;
    }

    if (!email.value.trim()) {
        showError(email, "Vui lòng nhập email.");
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(email, "Hãy nhập đúng định dạng email.");
        isValid = false;
    }

    if (!subject.value.trim()) {
        showError(subject, "Vui lòng nhập tiêu đề.");
        isValid = false;
    }

    if (!message.value.trim()) {
        showError(message, "Vui lòng nhập nội dung.");
        isValid = false;
    }

    // If all valid
if (isValid) {
    // Show custom popup
    document.getElementById("successPopup").style.display = "flex";
    this.reset();
}
});
function closePopup() {
    document.getElementById("successPopup").style.display = "none";
}

function showError(inputEl, message) {
    let errorEl = inputEl.parentElement.querySelector(".error-message");
    errorEl.innerText = message;
    errorEl.style.display = "block";

    // highlight border
    inputEl.classList.add("input-error");
}


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


